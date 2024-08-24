<template>
    <span :class="backgroundColorClass">
        {{ value }}
    </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	value: {
      type: String,
      default: ''
    }
});

const backgroundColorClass = computed(() => {
  if (props.value === 'Low') {
    return 'background-low-risk'; 
  } else if (props.value === 'Medium') {
    return 'background-medium-risk'; 
  } else if (props.value === 'High') {
    return 'background-high-risk'; 
  } else if (props.value === 'Very High') {
    return 'background-very-high-risk'; 
  } else {
    return 'background-transparent';
  }
});
</script>

<style scoped>
span {
    border-radius: .5rem;
    padding: 4px 16px;
}
.background-low-risk {
    background-color: rgba(40, 167, 69, .2);
    color: #28a745;
    border: 1px solid #28a745;
}

.background-medium-risk {
    background-color: rgba(255, 193, 7, .2);
    color: #ffc107;
    border: 1px solid #ffc107;
}

.background-high-risk {
    background-color: rgba(253, 126, 20, .2);
    color: #fd7e14;
    border: 1px solid #fd7e14;
}

.background-very-high-risk {
    background-color: rgba(220, 53, 69, .2);
    color: #dc3545;
    border: 1px solid #dc3545;
}

.background-transparent {
  background-color: transparent;
}
</style>