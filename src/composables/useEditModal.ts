import { ref } from 'vue';

export function useEditModal() {
    const showEditModal = ref(false);
    const editModalContent = ref({});

    const openModal = (content) => {
        showEditModal.value = true;
        editModalContent.value = content;
    };

    const handleSave = (updatedContent) => {
        console.log(updatedContent)
        showEditModal.value = false;
        editModalContent.value = {};
    };

    const handleCancel = () => {
        showEditModal.value = false;
        editModalContent.value = {};
    };

    return {
        showEditModal,
        editModalContent,
        openModal,
        handleSave,
        handleCancel
    };
}
