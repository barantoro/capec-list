<template>
  <main>
    <div class="app-wrapper">
      <div class="card">
        <div class="table-container">
          <SearchBar v-model:searchQuery="searchQuery" v-model:searchMode="searchMode" />
          <table>
            <!-- <TableHeader :headers="Object.keys(patterns[0])" /> -->
            <TableHeader :headers="tableHeaders" />
            <tbody>
              <TableRow
                v-for="(pattern, index) in patterns"
                :key="index"
                :pattern="pattern"
                :index="index"
                :activeIndex="activeIndex"
                :visibleItemsCount="visibleItemsCount"
                :searchQuery="searchQuery"
                :searchMode="searchMode"
                @toggleDescription="toggleExecutionFlowDescription"
                @editDescription="editDescription"
              />
            </tbody>
          </table>
          <EditModal v-if="showEditModal" :content="editModalContent" @save="handleSave" @cancel="handleCancel" />
        </div>
      </div>
    </div>
  </main>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useAttackPatterns } from '@/composables/useAttackPatterns';
import { useEditModal } from '@/composables/useEditModal';
import SearchBar from '@/components/SearchBar.vue';
import TableHeader from '@/components/TableHeader.vue';
import TableRow from '@/components/TableRow.vue';
import EditModal from '@/components/EditModal.vue';

const searchQuery = ref('');
const searchMode = ref('highlight');

const tableHeaders = ref(['Description', 'Prerequisites', 'Skills Required', 'Resources Required', 'Likelihood of Attack', 'Typical Severity', 'Consequences', 'Execution Flow', 'Mitigations'])


const { patterns } = useAttackPatterns(searchQuery, searchMode);

const { showEditModal, editModalContent, openModal, handleSave, handleCancel } = useEditModal();

const editDescription = (pattern) => {
  openModal({ description: pattern.Description });
};
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
}

.text-center {
  text-align: center !important;
}

.table-container {
    /* width: 100%; */
    overflow-x: auto;
    padding: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* table-layout: fixed; */
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

.strong {
  font-weight: 700;
}

@media (max-width: 768px) {
    .table-container {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .text-center {
      text-align: unset !important;
    }
    
    table {
        border: 0;
    }
    
    th, td {
        display: block;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
    }
    
    th {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    
    td {
        border: 1px solid #ddd;
        position: relative;
    }
    
    td::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-right: 15px;
        white-space: nowrap;
        font-weight: bold;
        text-align: left;
    }
}
</style>