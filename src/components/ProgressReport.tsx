import { Download, FileText, Calendar, Users } from 'lucide-react';
import { KSIData } from '../types/ksi';

interface ProgressReportProps {
  data: KSIData;
}

export function ProgressReport({ data }: ProgressReportProps) {
  const generateReport = () => {
    const report: string[] = [];
    report.push('# FedRAMP 20x KSI Compliance Progress Report');
    report.push(`\nGenerated: ${new Date().toLocaleDateString()}`);
    report.push(`Version: ${data.version}`);
    report.push(`Effective Date: ${data.effectiveDate}`);
    report.push(`Impact Level: ${data.impactLevel}\n`);
    
    report.push('## Executive Summary\n');
    
    let totalItems = 0;
    let completedItems = 0;
    
    data.categories.forEach(category => {
      category.items.forEach(item => {
        totalItems++;
        if (item.status === 'complete') completedItems++;
      });
    });
    
    const completionPercentage = (completedItems / totalItems) * 100;
    report.push(`Overall Completion: ${completionPercentage.toFixed(1)}% (${completedItems}/${totalItems} KSIs)\n`);
    
    report.push('## Category Summary\n');
    
    data.categories.forEach(category => {
      const categoryCompleted = category.items.filter(i => i.status === 'complete').length;
      const categoryTotal = category.items.length;
      const categoryPercentage = (categoryCompleted / categoryTotal) * 100;
      
      report.push(`### ${category.code}: ${category.name}`);
      report.push(`- Objective: ${category.objective}`);
      report.push(`- Progress: ${categoryPercentage.toFixed(1)}% (${categoryCompleted}/${categoryTotal} items)\n`);
      
      category.items.forEach(item => {
        const icon = item.status === 'complete' ? '✓' : item.status === 'in_progress' ? '◐' : '○';
        report.push(`  ${icon} ${item.code}: ${item.title}`);
        if (item.evidence) {
          report.push(`     Evidence: ${item.evidence}`);
        }
        if (item.documents && item.documents.length > 0) {
          report.push(`     Documents: ${item.documents.length} file(s) attached`);
          item.documents.forEach(doc => {
            report.push(`       - ${doc.name} (${new Date(doc.uploadedAt).toLocaleDateString()})`);
          });
        }
        if (item.evidenceRequirements && item.evidenceRequirements.length > 0) {
          report.push(`     Evidence Requirements:`);
          item.evidenceRequirements.forEach(req => {
            report.push(`       - ${req.type} (${req.collectionMethod}) → ${req.repository}`);
          });
        }
        if (item.successMetrics && item.successMetrics.length > 0) {
          report.push(`     Success Metrics:`);
          item.successMetrics.forEach(metric => {
            report.push(`       - ${metric}`);
          });
        }
        if (item.nistControls && item.nistControls.length > 0) {
          report.push(`     NIST Controls: ${item.nistControls.join(', ')}`);
        }
        if (item.continuousMonitoring) {
          report.push(`     ⚡ Continuous Monitoring Enabled`);
        }
      });
      report.push('');
    });
    
    const blob = new Blob([report.join('\n')], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FedRAMP-20x-KSI-Report-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FedRAMP-20x-KSI-Data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-sm border border-slate-700 p-6 mb-8">
      <h2 className="text-xl font-semibold text-slate-100 mb-4">Reports & Export</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={generateReport}
          className="flex items-center justify-center space-x-3 px-4 py-3 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors border border-slate-600"
        >
          <FileText className="w-5 h-5" />
          <span>Generate Progress Report</span>
        </button>
        
        <button
          onClick={exportJSON}
          className="flex items-center justify-center space-x-3 px-4 py-3 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors border border-slate-600"
        >
          <Download className="w-5 h-5" />
          <span>Export Data (JSON)</span>
        </button>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center space-x-3 mb-2">
            <Calendar className="w-5 h-5 text-slate-400" />
            <h3 className="font-medium text-slate-100">Implementation Timeline</h3>
          </div>
          <ul className="text-sm text-slate-400 space-y-1">
            <li>Phase 1: Weeks 1-4 (Critical Path)</li>
            <li>Phase 2: Weeks 5-12 (Foundation)</li>
            <li>Phase 3: Weeks 13-20 (Excellence)</li>
          </ul>
        </div>
        
        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center space-x-3 mb-2">
            <Users className="w-5 h-5 text-slate-400" />
            <h3 className="font-medium text-slate-100">Resource Requirements</h3>
          </div>
          <ul className="text-sm text-slate-400 space-y-1">
            <li>Security Lead (1 FTE)</li>
            <li>Cloud Engineers (2-3 FTE)</li>
            <li>DevSecOps (1 FTE)</li>
            <li>Compliance (0.5 FTE)</li>
          </ul>
        </div>
        
        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center space-x-3 mb-2">
            <Download className="w-5 h-5 text-slate-400" />
            <h3 className="font-medium text-slate-100">Pre-Assessment</h3>
          </div>
          <ul className="text-sm text-slate-400 space-y-1">
            <li>Documentation Review</li>
            <li>Technical Validation</li>
            <li>Operational Readiness</li>
            <li>Continuous Monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}