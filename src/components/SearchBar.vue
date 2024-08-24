<template>
  <div class="table-interactives-wrapper">
    <input v-model="localSearchQuery" @input="updateQuery" placeholder="Search by description..." />
    <div class="table-interactives-input-wrapper">
      <label>
        <input type="radio" v-model="localSearchMode" @change="updateMode" value="highlight" /> Highlight
      </label>
      <label>
        <input type="radio" v-model="localSearchMode" @change="updateMode" value="filter" /> Filter
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  searchQuery: String,
  searchMode: String
});

const emit = defineEmits(['update:searchQuery', 'update:searchMode']);

const localSearchQuery = ref(props.searchQuery);
const localSearchMode = ref(props.searchMode);

const updateQuery = () => {
  emit('update:searchQuery', localSearchQuery.value);
};

const updateMode = () => {
  emit('update:searchMode', localSearchMode.value);
};

watch([localSearchQuery, localSearchMode], ([newQuery, newMode]) => {
  emit('update:searchQuery', newQuery);
  emit('update:searchMode', newMode);
});
</script>

<style scoped>
.table-interactives-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}
.table-interactives-wrapper input {
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  color: #1c1c1c;
  background: #eaeaea;
  border-radius: .25rem;
  margin-bottom: 10px;
  padding: .5rem;
  width: 100%;
}
.table-interactives-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
}
.table-interactives-input-wrapper label {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 15px;
}
input[type='radio'] {
    accent-color: #1c1c1c;
}
</style>
