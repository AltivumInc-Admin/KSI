import { useRef } from 'react';
import { Square, CheckSquare, Upload, File, X, Download } from 'lucide-react';
import { KSIItem as KSIItemType, CompletionStatus, Document } from '../types/ksi';
import { EvidenceRequirements } from './EvidenceRequirements';
import clsx from 'clsx';

interface KSIItemProps {
  item: KSIItemType;
  onUpdate: (item: KSIItemType) => void;
}

export function KSIItem({ item, onUpdate }: KSIItemProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChecklistToggle = (index: number) => {
    const newCompletedItems = [...item.completedItems];
    newCompletedItems[index] = !newCompletedItems[index];
    
    const allCompleted = newCompletedItems.every(Boolean);
    const anyCompleted = newCompletedItems.some(Boolean);
    
    const newStatus: CompletionStatus = allCompleted 
      ? 'complete' 
      : anyCompleted 
        ? 'in_progress' 
        : 'not_started';
    
    onUpdate({
      ...item,
      completedItems: newCompletedItems,
      status: newStatus
    });
  };

  const handleStatusChange = (status: CompletionStatus) => {
    onUpdate({
      ...item,
      status
    });
  };

  const handleEvidenceChange = (evidence: string) => {
    onUpdate({
      ...item,
      evidence
    });
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const newDocuments: Document[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      await new Promise((resolve) => {
        reader.onload = (e) => {
          const base64 = e.target?.result as string;
          newDocuments.push({
            id: `${Date.now()}-${i}`,
            name: file.name,
            size: file.size,
            type: file.type,
            uploadedAt: new Date().toISOString(),
            data: base64
          });
          resolve(null);
        };
        reader.readAsDataURL(file);
      });
    }

    onUpdate({
      ...item,
      documents: [...(item.documents || []), ...newDocuments]
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDocumentRemove = (documentId: string) => {
    onUpdate({
      ...item,
      documents: item.documents?.filter(doc => doc.id !== documentId) || []
    });
  };

  const handleDocumentDownload = (document: Document) => {
    const link = window.document.createElement('a');
    link.href = document.data;
    link.download = document.name;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getStatusColor = (status: CompletionStatus) => {
    switch (status) {
      case 'complete':
        return 'text-emerald-400 bg-emerald-900/20 border-emerald-900/50';
      case 'in_progress':
        return 'text-amber-400 bg-amber-900/20 border-amber-900/50';
      default:
        return 'text-slate-400 bg-slate-700/50 border-slate-600';
    }
  };


  return (
    <div className="bg-slate-800 rounded-lg shadow-sm border border-slate-700 p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-100 mb-1">
            {item.code}: {item.title}
          </h3>
        </div>
        <div className="ml-4 flex items-center space-x-2">
          <select
            value={item.status}
            onChange={(e) => handleStatusChange(e.target.value as CompletionStatus)}
            className={clsx(
              'px-3 py-1 rounded-md text-sm font-medium border transition-colors cursor-pointer',
              getStatusColor(item.status)
            )}
          >
            <option value="not_started" className="bg-slate-800 text-slate-300">Not Started</option>
            <option value="in_progress" className="bg-slate-800 text-slate-300">In Progress</option>
            <option value="complete" className="bg-slate-800 text-slate-300">Complete</option>
          </select>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {item.checklist.map((checkItem, index) => (
          <div
            key={index}
            onClick={() => handleChecklistToggle(index)}
            className="flex items-center space-x-3 cursor-pointer hover:bg-slate-700/50 p-2 rounded-md transition-colors"
          >
            <div className="flex-shrink-0">
              {item.completedItems[index] ? (
                <CheckSquare className="w-5 h-5 text-emerald-400" />
              ) : (
                <Square className="w-5 h-5 text-slate-500" />
              )}
            </div>
            <span className={clsx(
              'text-sm',
              item.completedItems[index] ? 'text-slate-500 line-through' : 'text-slate-300'
            )}>
              {checkItem}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Evidence:
          </label>
          <textarea
            value={item.evidence}
            onChange={(e) => handleEvidenceChange(e.target.value)}
            placeholder="Document evidence and implementation details..."
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 resize-none"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Documents:
          </label>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.csv,.xlsx,.json"
          />
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-md transition-colors text-sm border border-slate-600"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Documents</span>
          </button>

          {item.documents && item.documents.length > 0 && (
            <div className="mt-3 space-y-2">
              {item.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-2 bg-slate-700/50 rounded-md hover:bg-slate-700 transition-colors border border-slate-600"
                >
                  <div className="flex items-center space-x-3">
                    <File className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-300">{doc.name}</p>
                      <p className="text-xs text-slate-500">
                        {formatFileSize(doc.size)} · {new Date(doc.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDocumentDownload(doc)}
                      className="p-1 hover:bg-slate-600 rounded transition-colors"
                      title="Download"
                    >
                      <Download className="w-4 h-4 text-slate-400" />
                    </button>
                    <button
                      onClick={() => handleDocumentRemove(doc.id)}
                      className="p-1 hover:bg-red-900/20 rounded transition-colors"
                      title="Remove"
                    >
                      <X className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Evidence Requirements Section */}
      <EvidenceRequirements 
        requirements={item.evidenceRequirements}
        successMetrics={item.successMetrics}
        continuousMonitoring={item.continuousMonitoring}
        nistControls={item.nistControls}
      />
    </div>
  );
}