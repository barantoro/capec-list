<template>
    <div class="expand-flex-item">
        <div class="expand-flex-item-list">
            <h3>{{ formattedTitle }}</h3>
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <div>
                        <div v-if="isObject(item)">
                        <p v-for="(subItem, subKey) in item" :key="subKey">
                            <strong>{{ subKey }}: </strong>
                            <div v-if="Array.isArray(subItem)">
                            <ul>
                                <li v-for="technique in subItem" :key="technique">
                                - {{ technique }}
                                </li>
                            </ul>
                            </div>
                            <span v-else>{{ subItem }}</span>
                        </p>
                        <hr v-if="index < items.length - 1">
                        </div>
                        <div v-else>- {{ item }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
  
<script setup> 
import { computed } from 'vue'
const props = defineProps({
  title: String,
  items: [Object, String, Number, Array],
});
 
const formattedTitle = computed(() => {
    return props.title.replace(/_/g, ' ');
});

const isObject = (value) => {
    return typeof value === 'object' && value !== null;
};
</script>

<style scoped>
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
</style>