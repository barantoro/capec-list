import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import EditModal from '@/components/EditModal.vue';

describe('EditModal.vue', () => {
    let wrapper;

    const content = {
        title: 'Example Title',
        description: 'This is an example description that is longer than 40 characters, so it should use a textarea.'
    };

    beforeEach(() => {
        wrapper = mount(EditModal, {
            props: { content },
        });
    });

    it('renders form elements based on content prop', () => {
        const labels = wrapper.findAll('label');
        expect(labels[0].text()).toBe('title');
        expect(labels[1].text()).toBe('description');

        const inputs = wrapper.findAll('input');
        const textareas = wrapper.findAll('textarea');

        expect(inputs.length).toBe(1); // title should render an input
        expect(textareas.length).toBe(1); // description should render a textarea

        expect(textareas[0].element.rows).toBe(10);
        expect(inputs[0].element.value).toBe(content.title);
        expect(textareas[0].element.value).toBe(content.description);
    });

    it('emits save event with form data when Save Changes is clicked', async () => {
        await wrapper.find('button:nth-of-type(2)').trigger('click');
        expect(wrapper.emitted().save).toBeTruthy();
        expect(wrapper.emitted().save[0]).toEqual([content]);
    });

    it('emits cancel event when Close Modal button or backdrop is clicked', async () => {
        await wrapper.find('button:nth-of-type(1)').trigger('click');
        expect(wrapper.emitted().cancel).toBeTruthy();

        await wrapper.find('.backdrop').trigger('click');
        expect(wrapper.emitted().cancel.length).toBe(2); // Should be called twice: once by button and once by backdrop
    });

    it('updates formData when input or textarea is modified', async () => {
        const newTitle = 'Updated Title';
        const newDescription = 'Updated description with less than 40 characters.';

        await wrapper.find('input').setValue(newTitle);
        await wrapper.find('textarea').setValue(newDescription);

        expect(wrapper.find('input').element.value).toBe(newTitle);
        expect(wrapper.find('textarea').element.value).toBe(newDescription);
    });

    it('handles prop changes efficiently', async () => {
        const startTime = performance.now();
        await wrapper.setProps({ content: { title: 'New Title', description: 'New description' } });
        const endTime = performance.now();
        expect(endTime - startTime).toBeLessThan(50); // Ensure it takes less than 50ms
    });
});
