import { KSIData } from '../types/ksi';
import { ksiEnhancements } from '../data/ksiEnhancements';

export function mergeKsiEnhancements(baseData: KSIData): KSIData {
  return {
    ...baseData,
    categories: baseData.categories.map(category => ({
      ...category,
      items: category.items.map(item => {
        const enhancement = ksiEnhancements[item.id];
        if (enhancement) {
          return {
            ...item,
            evidenceRequirements: enhancement.evidenceRequirements,
            successMetrics: enhancement.successMetrics,
            continuousMonitoring: enhancement.continuousMonitoring,
            nistControls: enhancement.nistControls
          };
        }
        return item;
      })
    }))
  };
}