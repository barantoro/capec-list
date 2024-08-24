<template>
  <tr>
    <td>
      <div class="table-row-flex">
        <div class="epxand-icon-wrapper" @click="toggleRow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" :style="{ transform: expandRow ? 'rotate(180deg)' : 'rotate(0deg)' }">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div class="description" @dblclick="$emit('editDescription', pattern)" v-html="highlightedDescription"></div>
      </div>
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
      <div class="consequences-wrapper">
        <label>
          <input type="checkbox" :checked="hasScope('Confidentiality')" disabled />
          Confidentiality
        </label>
        <label>
          <input type="checkbox" :checked="hasScope('Integrity')" disabled />
          Integrity
        </label>
        <label>
          <input type="checkbox" :checked="hasScope('Authenticity')" disabled />
          Authenticity
        </label>
      </div>
    </td>
    <td class="text-center">
      {{ pattern?.Execution_Flow.length }}
    </td>
    <td class="text-center">
      {{ pattern?.Mitigations.length }}
    </td>
  </tr>
  <tr v-if="expandRow">
    <td colspan="9">
      <div class="expanded-row">
        <h2>Description</h2>
        <p>{{ pattern?.Description }}</p>
        <div class="expand-flex">
          <div class="expand-flex-item" v-for="(value, key) in pattern">
            
            <div class="expand-flex-item-list" v-if="Array.isArray(value)">
              <h3>{{ key.replace(/_/g, ' ') }}</h3>
              <div>
                <ul>
                  <li v-for="(item, index) in value" :key="index">
                    <div v-if="typeof item === 'object' && item !== null">
                      <p v-for="(subItem, subKey) in item" :key="subKey">
                        <strong>{{ subKey }}: </strong>
                        <div v-if="Array.isArray(subItem)">
                          <ul>
                            <li v-for="technique in subItem" :key="technique">
                              - {{ technique }}
                            </li>
                          </ul>
                        </div>
                        <span>{{ subItem }}</span>
                      </p>
                      <hr>
                    </div>
                    <div v-else>- {{ item }}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ChipsBadge from './ChipsBadge.vue'

const props = defineProps({
  pattern: Object,
  index: Number,
  activeIndex: Number,
  searchMode: String,
  searchQuery: String
});

const isDescriptionExpanded = ref(false);

const expandRow = ref(false)

const highlightedDescription = computed(() => {
  if (props.searchMode !== 'highlight') return shortDescription.value;
  
  const query = props.searchQuery ? props.searchQuery.toLowerCase() : '';
  if (!query) return shortDescription.value;

  const parts = shortDescription.value.split(new RegExp(`(${query})`, 'gi'));
  return parts.map(part => part.toLowerCase() === query ? `<mark>${part}</mark>` : part).join('');
});

const shortDescription = computed(() => {
  const description = props.pattern ? props.pattern.Description : '';
  return isDescriptionExpanded.value || description.length <= 50
    ? description
    : `${description.slice(0, 175)}...`;
});

const toggleRow = () => {
  expandRow.value = !expandRow.value
};

const hasScope = (scope: string) => {
  return props.pattern?.Consequences.some(consequence => consequence.Scope.includes(scope));
};
</script>


<style scoped>
.consequences-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.consequences-wrapper label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .25rem;
  margin-bottom: 5px;
}

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

ul {
  padding-left: 0;
  list-style: none;
}

li {
  margin-bottom: .25rem;
}

li span {
  word-break: break-word;
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

.expand-flex-item {
  flex: 0 0 calc(32.33%); 
  box-sizing: border-box;
}

.expand-flex-item-list {
  background: #f9f9f9;
  box-shadow: 6px 6px 8px #dcdcdc, -6px -6px 8px #f6f6f6;
  border-radius: .25rem;
  padding: 1rem;
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
