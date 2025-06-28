import { useState, useEffect, useCallback } from 'react';
import { ksiData as initialKsiData } from './data/ksiData';
import { KSIData, KSIItem as KSIItemType } from './types/ksi';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAuditLog } from './hooks/useAuditLog';
import { mergeKsiEnhancements } from './utils/mergeEnhancements';
import { Dashboard } from './components/Dashboard';
import { KSICategory } from './components/KSICategory';
import { ProgressReport } from './components/ProgressReport';
import { AuditLog } from './components/AuditLog';
import { RefreshCw, Save } from 'lucide-react';

function App() {
  // Merge enhancements with base data
  const enhancedInitialData = mergeKsiEnhancements(initialKsiData);
  
  const [ksiData, setKsiData] = useLocalStorage<KSIData>('fedramp-ksi-data', enhancedInitialData);
  const [lastSaved, setLastSaved] = useState<Date>(new Date());
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const { auditLog, addAuditEntry, clearAuditLog, exportAuditLog } = useAuditLog();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSaveNotification(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showSaveNotification]);

  const handleItemUpdate = useCallback((categoryId: string, updatedItem: KSIItemType, previousItem?: KSIItemType) => {
    // Find the category for audit logging
    const category = ksiData.categories.find(cat => cat.id === categoryId);
    if (!category) return;

    // Track changes for audit log
    if (previousItem) {
      // Status change
      if (previousItem.status !== updatedItem.status) {
        addAuditEntry('status_changed', updatedItem, category.code, {
          field: 'Status',
          oldValue: previousItem.status,
          newValue: updatedItem.status
        });
      }

      // Evidence change
      if (previousItem.evidence !== updatedItem.evidence) {
        addAuditEntry('evidence_updated', updatedItem, category.code, {
          field: 'Evidence',
          details: 'Evidence text updated'
        });
      }

      // Checklist changes
      const checklistChanged = previousItem.completedItems.some((item, index) => 
        item !== updatedItem.completedItems[index]
      );
      if (checklistChanged) {
        const completedCount = updatedItem.completedItems.filter(Boolean).length;
        const totalCount = updatedItem.completedItems.length;
        addAuditEntry('checklist_updated', updatedItem, category.code, {
          details: `${completedCount}/${totalCount} items completed`
        });
      }

      // Document changes
      const prevDocCount = previousItem.documents?.length || 0;
      const newDocCount = updatedItem.documents?.length || 0;
      
      if (newDocCount > prevDocCount) {
        const newDocs = updatedItem.documents?.slice(prevDocCount) || [];
        newDocs.forEach(doc => {
          addAuditEntry('document_added', updatedItem, category.code, {
            details: `Added: ${doc.name}`
          });
        });
      } else if (newDocCount < prevDocCount) {
        addAuditEntry('document_removed', updatedItem, category.code, {
          details: `Document removed`
        });
      }
    }

    const newData = {
      ...ksiData,
      categories: ksiData.categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            items: cat.items.map(item => 
              item.id === updatedItem.id ? updatedItem : item
            )
          };
        }
        return cat;
      })
    };
    setKsiData(newData);
    setLastSaved(new Date());
    setShowSaveNotification(true);
  }, [ksiData, setKsiData, addAuditEntry]);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
      setKsiData(enhancedInitialData);
      setLastSaved(new Date());
      setShowSaveNotification(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1" />
          <div className="flex items-center space-x-4">
            <button
              onClick={handleReset}
              className="flex items-center space-x-2 px-4 py-2 text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset All</span>
            </button>
            {showSaveNotification && (
              <div className="flex items-center space-x-2 text-green-400 bg-green-900/20 px-4 py-2 rounded-lg">
                <Save className="w-4 h-4" />
                <span className="text-sm">Saved</span>
              </div>
            )}
          </div>
        </div>

        <Dashboard data={ksiData} />
        <ProgressReport data={ksiData} />
        <AuditLog 
          auditLog={auditLog}
          onExport={exportAuditLog}
          onClear={clearAuditLog}
        />

        <div className="space-y-8">
          {ksiData.categories.map(category => (
            <KSICategory
              key={category.id}
              category={category}
              onItemUpdate={handleItemUpdate}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-slate-400">
          <p>FedRAMP 20x KSI Compliance Tracker</p>
          <p>Last saved: {lastSaved.toLocaleString()}</p>
          <p className="mt-2">
            Data is automatically saved to your browser's local storage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;