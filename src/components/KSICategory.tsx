import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { KSICategory as KSICategoryType, KSIItem as KSIItemType } from '../types/ksi';
import { KSIItem } from './KSIItem';
import clsx from 'clsx';

interface KSICategoryProps {
  category: KSICategoryType;
  onItemUpdate: (categoryId: string, item: KSIItemType, previousItem?: KSIItemType) => void;
}

export function KSICategory({ category, onItemUpdate }: KSICategoryProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const completedItems = category.items.filter(item => item.status === 'complete').length;
  const totalItems = category.items.length;
  const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  const getCategoryStatus = () => {
    if (completedItems === totalItems) return 'complete';
    if (completedItems > 0) return 'in_progress';
    return 'not_started';
  };

  const getStatusColor = () => {
    const status = getCategoryStatus();
    switch (status) {
      case 'complete':
        return 'bg-emerald-500';
      case 'in_progress':
        return 'bg-amber-500';
      default:
        return 'bg-slate-600';
    }
  };

  return (
    <div className="mb-8">
      <div 
        className="bg-slate-800 rounded-lg p-4 cursor-pointer hover:bg-slate-700 transition-colors border border-slate-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
            <div>
              <h2 className="text-xl font-semibold text-slate-100">{category.code}: {category.name}</h2>
              <p className="text-sm text-slate-400 mt-1">{category.objective}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-slate-400">
              {completedItems} / {totalItems} completed
            </div>
            <div className="w-32 bg-slate-700 rounded-full h-2 overflow-hidden">
              <div 
                className={clsx('h-full transition-all duration-300', getStatusColor())}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {category.items.map((item) => (
            <KSIItem
              key={item.id}
              item={item}
              onUpdate={(updatedItem) => onItemUpdate(category.id, updatedItem, item)}
            />
          ))}
        </div>
      )}
    </div>
  );
}