import { KSIData } from '../types/ksi';
import { Shield, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface DashboardProps {
  data: KSIData;
}

export function Dashboard({ data }: DashboardProps) {
  const calculateStats = () => {
    let totalItems = 0;
    let completedItems = 0;
    let inProgressItems = 0;
    let notStartedItems = 0;

    data.categories.forEach(category => {
      category.items.forEach(item => {
        totalItems++;
        switch (item.status) {
          case 'complete':
            completedItems++;
            break;
          case 'in_progress':
            inProgressItems++;
            break;
          case 'not_started':
            notStartedItems++;
            break;
        }
      });
    });

    const completionPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

    return {
      totalItems,
      completedItems,
      inProgressItems,
      notStartedItems,
      completionPercentage
    };
  };

  const stats = calculateStats();

  const getCriticalItems = () => {
    const criticalKSIs = ['IAM-01', 'SVC-03', 'MLA-01', 'TPR-02'];
    const criticalItems: any[] = [];
    
    data.categories.forEach(category => {
      category.items.forEach(item => {
        if (criticalKSIs.includes(item.code) && item.status !== 'complete') {
          criticalItems.push({
            ...item,
            categoryName: category.name
          });
        }
      });
    });
    
    return criticalItems;
  };

  const criticalItems = getCriticalItems();

  return (
    <div className="bg-slate-800 rounded-lg shadow-sm border border-slate-700 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-100 flex items-center">
          <Shield className="w-8 h-8 mr-3 text-slate-400" />
          FedRAMP 20x KSI Compliance Dashboard
        </h1>
        <div className="text-sm text-slate-400">
          <div>Version: {data.version}</div>
          <div>Effective: {data.effectiveDate}</div>
          <div>Impact Level: {data.impactLevel}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400 font-medium">Total KSIs</p>
              <p className="text-2xl font-bold text-slate-100">{stats.totalItems}</p>
            </div>
            <Shield className="w-8 h-8 text-slate-400" />
          </div>
        </div>

        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-emerald-400 font-medium">Completed</p>
              <p className="text-2xl font-bold text-slate-100">{stats.completedItems}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
        </div>

        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-400 font-medium">In Progress</p>
              <p className="text-2xl font-bold text-slate-100">{stats.inProgressItems}</p>
            </div>
            <Clock className="w-8 h-8 text-amber-400" />
          </div>
        </div>

        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400 font-medium">Not Started</p>
              <p className="text-2xl font-bold text-slate-100">{stats.notStartedItems}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-slate-400">Overall Progress</h3>
          <span className="text-sm font-semibold text-slate-100">
            {stats.completionPercentage.toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-slate-500 to-slate-400 transition-all duration-500"
            style={{ width: `${stats.completionPercentage}%` }}
          />
        </div>
      </div>

      {criticalItems.length > 0 && (
        <div className="bg-red-900/20 border border-red-900/50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            Critical Path Items Requiring Attention
          </h3>
          <ul className="space-y-1">
            {criticalItems.map(item => (
              <li key={item.id} className="text-sm text-red-300">
                <span className="font-medium">{item.code}</span>: {item.title} 
                <span className="text-red-400 ml-2">({item.categoryName})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}