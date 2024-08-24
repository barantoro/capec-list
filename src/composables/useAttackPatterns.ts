import { ref, computed } from 'vue';
import { CAPEC_ATTACK_PATTERNS } from '../data/capecAttackPatterns';
import type { AttackPattern } from '../data/capecAttackPatterns';

export function useAttackPatterns(searchQuery: any, searchMode: any) {
  const patterns = ref<AttackPattern[]>(CAPEC_ATTACK_PATTERNS);

  const sortedPatterns = computed(() => {
    return [...patterns.value]
      .sort((a, b) => b.Execution_Flow.length - a.Execution_Flow.length);
  });

  const filteredPatterns = computed(() => {
    if (searchMode.value === 'filter') {
      return sortedPatterns.value.filter(pattern => 
        pattern.Description.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }
    return sortedPatterns.value;
  });

  return {
    patterns: filteredPatterns
  };
}
