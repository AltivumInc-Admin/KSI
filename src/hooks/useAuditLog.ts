import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AuditLogEntry, AuditEventType, KSIItem } from '../types/ksi';

export function useAuditLog() {
  const [auditLog, setAuditLog] = useLocalStorage<AuditLogEntry[]>('fedramp-ksi-audit-log', []);

  const addAuditEntry = useCallback((
    eventType: AuditEventType,
    item: KSIItem,
    categoryCode: string,
    details: {
      field?: string;
      oldValue?: string;
      newValue?: string;
      details?: string;
    }
  ) => {
    const entry: AuditLogEntry = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      eventType,
      itemCode: item.code,
      itemTitle: item.title,
      categoryCode,
      ...details,
      user: 'Current User' // Placeholder for future multi-user support
    };

    setAuditLog((prev: AuditLogEntry[]) => [entry, ...prev]);
  }, [setAuditLog]);

  const clearAuditLog = useCallback(() => {
    if (window.confirm('Are you sure you want to clear the audit log? This action cannot be undone.')) {
      setAuditLog([]);
    }
  }, [setAuditLog]);

  const exportAuditLog = useCallback(() => {
    const csvContent = [
      ['Timestamp', 'Event Type', 'Category', 'Item Code', 'Item Title', 'Field', 'Old Value', 'New Value', 'Details', 'User'],
      ...auditLog.map(entry => [
        new Date(entry.timestamp).toLocaleString(),
        entry.eventType.replace('_', ' '),
        entry.categoryCode,
        entry.itemCode,
        entry.itemTitle,
        entry.field || '',
        entry.oldValue || '',
        entry.newValue || '',
        entry.details || '',
        entry.user || ''
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FedRAMP-KSI-Audit-Log-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [auditLog]);

  return {
    auditLog,
    addAuditEntry,
    clearAuditLog,
    exportAuditLog
  };
}