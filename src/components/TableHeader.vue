<template>
  <thead>
    <tr>
      <th v-for="item in headers" :key="item">{{ item }}</th>
    </tr>
  </thead>
</template>

<script setup>
const props = defineProps({
  headers: Array,
});
</script>

<style scoped>
th {
    background-color: #1c1c1c;
    color: #f4f4f4;
    font-weight: bold;
     padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
</style>
