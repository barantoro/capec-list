<template>
  <div class="table-row-flex">
    <div class="expand-icon-wrapper" @click="$emit('toggle')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
        :style="{ transform: expandRow ? 'rotate(180deg)' : 'rotate(0deg)' }"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
    <div
      class="description"
      @dblclick="$emit('edit-description')"
      v-html="highlightedDescription"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  expandRow: Boolean,
  description: String,
  searchMode: String,
  searchQuery: String,
});

const shortDescription = computed(() => {
  return props.description && props.description.length > 175
    ? `${props.description.slice(0, 175)}...`
    : props.description;
});

const highlightedDescription = computed(() => {
  if (props.searchMode !== 'highlight') return shortDescription.value;

  const query = props.searchQuery ? props.searchQuery.toLowerCase() : '';
  if (!query) return shortDescription.value;

  const parts = shortDescription.value.split(new RegExp(`(${query})`, 'gi'));
  return parts
    .map((part) => (part.toLowerCase() === query ? `<mark>${part}</mark>` : part))
    .join('');
});
</script>

<style scoped>
.expand-icon-wrapper {
  width: 100%;
  max-width: 24px;
}
</style>
