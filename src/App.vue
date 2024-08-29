<template>
  <main>
    <div class="app-wrapper">
      <div class="card">
        <div class="table-container">
          <SearchBar v-model:searchQuery="searchQuery" v-model:searchMode="searchMode" />
          <CustomTable :tableHeaders="tableHeaders" :items="patterns" :searchQuery="searchQuery" :searchMode="searchMode" />
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import { ref } from 'vue';
import { useAttackPatterns } from '@/composables/useAttackPatterns';
import SearchBar from './components/SearchBar.vue';
import CustomTable from './components/CustomTable.vue';

const searchQuery = ref('');
const searchMode = ref('highlight');
const tableHeaders = ref(['Description', 'Prerequisites', 'Skills Required', 'Resources Required', 'Likelihood of Attack', 'Typical Severity', 'Consequences', 'Execution Flow', 'Mitigations'])
const { patterns } = useAttackPatterns(searchQuery, searchMode);
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
  font-family: "Roboto", sans-serif;
  font-style: normal;
}

body {
  background: #eaeaea;
}

.app-wrapper {
  padding: 1rem;
}

.card {
  background: #eaeaea;
  box-shadow: 6px 6px 8px #dcdcdc, -6px -6px 8px #f6f6f6;
  border-radius: 8px;
  padding-bottom: 1rem;
}

.text-center {
  text-align: center !important;
}

.table-container {
    overflow-x: auto;
    padding: 1rem;
    overflow: auto;
    height: 87vh;
}

@media (max-width: 768px) {
    .table-container {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .text-center {
      text-align: unset !important;
    }
}
</style>