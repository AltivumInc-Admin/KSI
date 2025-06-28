import { useState } from 'react';
import { History, Download, Trash2, Filter, ChevronDown, ChevronRight } from 'lucide-react';
import { AuditLogEntry, AuditEventType } from '../types/ksi';
import clsx from 'clsx';

interface AuditLogProps {
  auditLog: AuditLogEntry[];
  onExport: () => void;
  onClear: () => void;
}

export function AuditLog({ auditLog, onExport, onClear }: AuditLogProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filterType, setFilterType] = useState<AuditEventType | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredLog = auditLog.filter(entry => {
    if (filterType !== 'all' && entry.eventType !== filterType) return false;
    if (filterCategory !== 'all' && entry.categoryCode !== filterCategory) return false;
    return true;
  });

  const categories = Array.from(new Set(auditLog.map(entry => entry.categoryCode))).sort();

  const getEventTypeLabel = (type: AuditEventType): string => {
    switch (type) {
      case 'status_changed': return 'Status Changed';
      case 'checklist_updated': return 'Checklist Updated';
      case 'evidence_updated': return 'Evidence Updated';
      case 'document_added': return 'Document Added';
      case 'document_removed': return 'Document Removed';
      default: return type;
    }
  };

  const getEventTypeColor = (type: AuditEventType): string => {
    switch (type) {
      case 'status_changed': return 'text-blue-400 bg-blue-900/20';
      case 'checklist_updated': return 'text-emerald-400 bg-emerald-900/20';
      case 'evidence_updated': return 'text-purple-400 bg-purple-900/20';
      case 'document_added': return 'text-indigo-400 bg-indigo-900/20';
      case 'document_removed': return 'text-red-400 bg-red-900/20';
      default: return 'text-slate-400 bg-slate-700/50';
    }
  };

  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffMins < 1440) {
      const hours = Math.floor(diffMins / 60);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-sm border border-slate-700 mb-8">
      <div 
        className="p-6 cursor-pointer hover:bg-slate-700 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
            <History className="w-5 h-5 text-slate-400" />
            <h2 className="text-xl font-semibold text-slate-100">Audit Log</h2>
            <span className="text-sm text-slate-400">({auditLog.length} entries)</span>
          </div>
          
          {!isExpanded && auditLog.length > 0 && (
            <div className="text-sm text-slate-400">
              Last change: {formatTimestamp(auditLog[0].timestamp)}
            </div>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-slate-700">
          <div className="p-4 flex items-center justify-between bg-slate-700/50">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as AuditEventType | 'all')}
                  className="text-sm bg-slate-700 border border-slate-600 text-slate-100 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="all">All Events</option>
                  <option value="status_changed">Status Changes</option>
                  <option value="checklist_updated">Checklist Updates</option>
                  <option value="evidence_updated">Evidence Updates</option>
                  <option value="document_added">Documents Added</option>
                  <option value="document_removed">Documents Removed</option>
                </select>
              </div>
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={onExport}
                className="flex items-center space-x-2 px-3 py-1 text-sm bg-slate-700 border border-slate-600 text-slate-200 rounded-md hover:bg-slate-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
              
              <button
                onClick={onClear}
                className="flex items-center space-x-2 px-3 py-1 text-sm bg-red-900/20 border border-red-900/50 text-red-400 rounded-md hover:bg-red-900/30 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear Log</span>
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {filteredLog.length === 0 ? (
              <div className="p-8 text-center text-slate-400">
                No audit log entries found
              </div>
            ) : (
              <div className="divide-y divide-slate-700">
                {filteredLog.map((entry) => (
                  <div key={entry.id} className="p-4 hover:bg-slate-700/50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className={clsx(
                            'px-2 py-0.5 text-xs font-medium rounded-full',
                            getEventTypeColor(entry.eventType)
                          )}>
                            {getEventTypeLabel(entry.eventType)}
                          </span>
                          <span className="text-sm text-slate-400">
                            {entry.categoryCode} / {entry.itemCode}
                          </span>
                        </div>
                        
                        <p className="text-sm text-slate-100 font-medium mb-1">
                          {entry.itemTitle}
                        </p>
                        
                        {entry.field && (
                          <p className="text-sm text-slate-300">
                            {entry.field}: 
                            {entry.oldValue && <span className="text-red-400 line-through mx-1">{entry.oldValue}</span>}
                            {entry.newValue && <span className="text-emerald-400 mx-1">{entry.newValue}</span>}
                          </p>
                        )}
                        
                        {entry.details && (
                          <p className="text-sm text-slate-300">{entry.details}</p>
                        )}
                      </div>
                      
                      <div className="text-right ml-4">
                        <p className="text-xs text-slate-500">{formatTimestamp(entry.timestamp)}</p>
                        <p className="text-xs text-slate-500">{new Date(entry.timestamp).toLocaleTimeString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}