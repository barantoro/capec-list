<template>
    <table>
    <!-- <TableHeader :headers="Object.keys(patterns[0])" /> -->
        <TableHeader :headers="tableHeaders" />
        <tbody>
            <TableRow
            v-for="(pattern, index) in items"
            :key="index"
            :pattern="pattern"
            :index="index"
            :searchQuery="searchQuery"
            :searchMode="searchMode"
            @editDescription="editDescription"
            />
            <tr v-if="items.length === 0">
                <td :colspan="tableHeaders.length" class="no-data">
                    No data to display
                </td>
            </tr>
        </tbody>
    </table>
    <EditModal v-if="showEditModal" :content="editModalContent" @save="handleSave" @cancel="handleCancel" />
</template>
<script setup>
import TableHeader from './TableHeader.vue';
import TableRow from './TableRow.vue';
import EditModal from './EditModal.vue';
import { useEditModal } from '@/composables/useEditModal';

const props = defineProps({
    tableHeaders: Array,
    items: Number,
    activeIndex: Number,
    searchMode: String,
    searchQuery: String
});

const { showEditModal, editModalContent, openModal, handleSave, handleCancel } = useEditModal();

const editDescription = (pattern) => {
  openModal({ description: pattern.Description });
};
</script>


<style>
table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

thead tr th {
  position: sticky;
  top: -1rem;
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

.no-data {
    text-align: center;
    padding: 1rem;
}

@media (max-width: 768px) {  
    table {
        border: 0;
    }

    thead tr th {
        position: absolute;
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
        padding-right: 15px;
        white-space: nowrap;
        font-weight: bold;
        text-align: left;
    }
}
</style>