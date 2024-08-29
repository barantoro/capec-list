import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomTable from '@/components/CustomTable.vue';
import EditModal from '@/components/EditModal.vue';
import { MockData } from '@/stories/assets/MockData';

describe('CustomTable.vue', () => {
    const tableHeaders = Object.keys(MockData[0]);
    const items = MockData

    it('renders table headers correctly', () => {
        const wrapper = mount(CustomTable, {
            props: { tableHeaders, items },
        });
        const headers = wrapper.findAll('th');
        expect(headers.length).toBe(tableHeaders.length);
        headers.forEach((header, index) => {
            expect(header.text()).toBe(tableHeaders[index]);
        });
    });

    it('renders table rows correctly', () => {
        const wrapper = mount(CustomTable, {
            props: { tableHeaders, items },
        });
        const rows = wrapper.findAll('tbody tr');
        expect(rows.length).toBe(items.length);
        rows.forEach((row, index) => {
            const cells = row.findAll('td');
            expect(cells.length).toBe(tableHeaders.length);
        });
    });

    it('shows no data message when items list is empty', () => {
        const wrapper = mount(CustomTable, {
            props: { tableHeaders, items: [] },
        });
        expect(wrapper.find('tbody tr td.no-data').exists()).toBe(true);
        expect(wrapper.find('tbody tr td.no-data').text()).toBe('No data to display');
    });

    it('opens the edit modal with correct content on row edit click', async () => {
        const wrapper = mount(CustomTable, {
            props: { tableHeaders, items },
        });

        await wrapper.vm.editDescription(items[0]);

        expect(wrapper.vm.showEditModal).toBe(true);
        expect(wrapper.vm.editModalContent.description).toBe(items[0].Description);

        const modal = wrapper.findComponent(EditModal);
        expect(modal.exists()).toBe(true);
        expect(modal.props().content.description).toBe(items[0].Description);
    });

    it('save event with correct data when saving in modal', async () => {
        const wrapper = mount(CustomTable, {
            props: { tableHeaders, items },
        });

        await wrapper.vm.editDescription(items[0]);

        const modal = wrapper.findComponent(EditModal);
        expect(modal.exists()).toBe(true);
        expect(modal.props().content).toEqual({ description: items[0].Description });

        const logSpy = vi.spyOn(console, 'log');

        modal.vm.$emit('save', { description: 'New Description 1' });

        expect(wrapper.vm.showEditModal).toBe(false);

        // Assert that console.log was called with the correct message because there's no API
        expect(logSpy).toHaveBeenCalledWith({ description: 'New Description 1' });

        // Cleanup: Restore the original console.log after the test
        logSpy.mockRestore();
    });

    it('closes the modal on cancel', async () => {
        const wrapper = mount(CustomTable, {
            props: { tableHeaders, items },
        });

        await wrapper.vm.editDescription(items[0]);
        const modal = wrapper.findComponent(EditModal);

        modal.vm.$emit('cancel');
        expect(wrapper.vm.showEditModal).toBe(false);
    });
});
