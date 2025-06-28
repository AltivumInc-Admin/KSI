import { FileText, Package, Database, CheckCircle } from 'lucide-react';
import { EvidenceRequirement } from '../types/ksi';
import clsx from 'clsx';

interface EvidenceRequirementsProps {
  requirements?: EvidenceRequirement[];
  successMetrics?: string[];
  continuousMonitoring?: boolean;
  nistControls?: string[];
}

export function EvidenceRequirements({ 
  requirements, 
  successMetrics, 
  continuousMonitoring,
  nistControls 
}: EvidenceRequirementsProps) {
  if (!requirements?.length && !successMetrics?.length && !nistControls?.length) {
    return null;
  }

  return (
    <div className="mt-6 space-y-4">
      {/* Evidence Requirements */}
      {requirements && requirements.length > 0 && (
        <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
          <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Evidence Requirements
          </h4>
          <div className="space-y-3">
            {requirements.map((req, index) => (
              <div key={index} className="bg-slate-800/50 rounded p-3 text-sm">
                <div className="flex items-start justify-between mb-2">
                  <span className="font-medium text-slate-200">{req.type}</span>
                  <span className={clsx(
                    'text-xs px-2 py-0.5 rounded',
                    req.collectionMethod.includes('Automated') 
                      ? 'bg-emerald-900/30 text-emerald-400' 
                      : 'bg-amber-900/30 text-amber-400'
                  )}>
                    {req.collectionMethod}
                  </span>
                </div>
                <div className="space-y-1 text-slate-400">
                  <div className="flex items-center">
                    <Database className="w-3 h-3 mr-1" />
                    <span className="text-xs">{req.repository}</span>
                  </div>
                  {req.description && (
                    <p className="text-xs">{req.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Success Metrics */}
      {successMetrics && successMetrics.length > 0 && (
        <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
          <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            Success Metrics
            {continuousMonitoring && (
              <span className="ml-auto text-xs bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded">
                Continuous Monitoring
              </span>
            )}
          </h4>
          <ul className="space-y-2">
            {successMetrics.map((metric, index) => (
              <li key={index} className="flex items-start text-sm text-slate-300">
                <span className="text-emerald-400 mr-2">▸</span>
                {metric}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* NIST Controls */}
      {nistControls && nistControls.length > 0 && (
        <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
          <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center">
            <Package className="w-4 h-4 mr-2" />
            NIST 800-53 Controls
          </h4>
          <div className="flex flex-wrap gap-2">
            {nistControls.map((control, index) => (
              <span 
                key={index} 
                className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-600"
              >
                {control}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}