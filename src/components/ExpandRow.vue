<template>
<td :colspan="colspan">
  <div class="expanded-row">
    <h2>Description</h2>
    <p>{{ pattern?.Description }}</p>
    <div class="expand-flex">
        <template v-for="(value, key) in pattern" :key="key">
            <ExpandRowItem v-if="isNonEmptyArray(value)" :title="key" :items="value" />
        </template>
    </div>
  </div>
</td>
</template>
  
<script setup> 
import ExpandRowItem from './ExpandRowItem.vue';

const props = defineProps({
  pattern: Object,
  colspan: Number
});

const isNonEmptyArray = (value) => {
    return Array.isArray(value) && value.length > 0;
};
</script>

<style scoped>
.expanded-row {
    padding: 1rem;
    background-color: #fff;
    border-radius: .25rem;
}

.expand-flex {
  display: flex; 
  align-items: flex-start; 
  justify-content: space-between; 
  flex-wrap: wrap;
  gap: 1rem;
}
</style>