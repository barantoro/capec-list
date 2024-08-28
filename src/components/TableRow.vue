<template>
  <tr>
    <td>
      <DescriptionCell
        :expand-row="expandRow"
        :description="pattern?.Description"
        :search-mode="searchMode"
        :search-query="searchQuery"
        @toggle="toggleRow"
        @edit-description="$emit('editDescription', pattern)"
      />
    </td>
    <td class="text-center">
      {{ pattern?.Prerequisites.length }}
    </td>
    <td class="text-center">
      {{ pattern?.Skills_Required.length }}
    </td>
    <td class="text-center">
      {{ pattern?.Resources_Required.length }}
    </td>
    <td class="text-center">
      <ChipsBadge :value="pattern?.Likelihood_Of_Attack" />
    </td>
    <td class="text-center">
      <ChipsBadge :value="pattern?.Typical_Severity" />
    </td>
    <td>
      <ConsequencesCell :consequences="pattern?.Consequences" />
    </td>
    <td class="text-center">
      {{ pattern?.Execution_Flow.length }}
    </td>
    <td class="text-center">
      {{ pattern?.Mitigations.length }}
    </td>
  </tr>
  <tr v-if="expandRow">
    <ExpandRow :pattern="pattern" :colspan="Object.keys(pattern).length" v-if="expandRow" />
  </tr>
</template>

<script setup>
import { ref, computed } from 'vue';
import ExpandRow from './ExpandRow.vue'
import ChipsBadge from './ChipsBadge.vue'
import ConsequencesCell from './ConsequencesCell.vue'
import DescriptionCell from './DescriptionCell.vue'


const props = defineProps({
  pattern: Object,
  index: Number,
  activeIndex: Number,
  searchMode: String,
  searchQuery: String
});

const expandRow = ref(false);

const toggleRow = () => {
  expandRow.value = !expandRow.value;
};
</script>


<style scoped>
td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    max-width: 600px;
    /* vertical-align: text-top; */
}

td:first-child {
  cursor: pointer;
}

mark {
  background-color: yellow;
}

.table-row-flex {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
}

.table-row-flex svg{
    width: 32px;
    cursor: pointer;
}

.table-row-flex .number {
  font-size: 16px;
}

.number-wrapper {
  background-color: red;
}
</style>
