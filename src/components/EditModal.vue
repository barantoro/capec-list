<template>
    <div class="fixed">
        <div class="edit-modal">
            <div class="form-wrapper">
                <div v-for="(value, key) in content" :key="key" class="form-group">
                    <label :for="key">{{ key }}</label>
                    <textarea :id="key" v-model="formData[key]" v-if="formData[key].length > 40" rows="10"></textarea>
                    <input :id="key" v-model="formData[key]" class="form-control" v-else />
                </div>
                <div class="modal-actions">
                    <button @click="handleCancel">Close Modal</button>
                    <button @click="handleSave">Save Changes</button>
                </div>
            </div>
        </div>
        <div class="backdrop" @click="handleCancel"></div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
	content: {
      type: Object,
      default: () => ({})
    }
});

const emit = defineEmits(['save', 'cancel']);
const formData = reactive({ ...props.content });

const handleSave = () => {
    emit('save', formData);
};

const handleCancel = () => {
    emit('cancel');
};
</script>

<style scoped>
.fixed {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.edit-modal {
    width: 100%;
    max-width: 650px;
    position: absolute;
    top: 30%;
    left: 30%;
    background: #f4f4f4;
    border-radius: 8px;
    padding: 1rem;
    z-index: 999;
}
.form-wrapper, .form-group {
    display: flex;
    flex-direction: column;
}
label {
    text-transform: capitalize;
    margin-bottom: .25rem;
    font-size: 14px;
    color: #12121299;
}
input, textarea {
    border: 1px solid #ccc;
    border-radius: .25rem;
    padding: .5rem .25rem;
}
.backdrop {
    position: absolute;
    z-index: 99;
    background: rgba(28, 28, 28, .5);
    width: 100%;
    height: -webkit-fill-available;
    top: 0;
    left: 0;
}
.modal-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}
.modal-actions button {
    border: 1px solid;
    padding: .5rem;
    border-radius: .25rem;
    font-size: 14px;
    transition: .5s;
    cursor: pointer;
}
.modal-actions button:hover {
    background: #1c1c1c;
    color: #f4f4f4;
    transition: .5s;
}
.modal-actions button:last-child {
    border-color: #1c1c1c;
    background: #1c1c1c;
    color: #f4f4f4;
}
.modal-actions button:last-child:hover {
    transition: .5s;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>