<template>
  <div class="consequences-wrapper">
    <label v-for="scope in scopes" :key="scope">
      <input type="checkbox" :checked="hasScope(scope)" disabled />
      {{ scope }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  consequences: Array,
});

const scopes = ['Confidentiality', 'Integrity', 'Authenticity'];

const hasScope = (scope) => {
  return props.consequences.some(consequence => consequence.Scope.includes(scope));
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
</style>
