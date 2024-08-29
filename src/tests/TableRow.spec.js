import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import TableRow from '@/components/TableRow.vue';
import ChipsBadge from '@/components/ChipsBadge.vue';

describe('TableRow.vue', () => {
    let wrapper;

    const pattern = {
        Description: 'A detailed description of the pattern.',
        Prerequisites: ['Prerequisite 1', 'Prerequisite 2'],
        Skills_Required: ['Skill 1', 'Skill 2'],
        Resources_Required: ['Resource 1', 'Resource 2'],
        Likelihood_Of_Attack: 'High',
        Typical_Severity: 'Critical',
        Consequences: [{ Scope: ['Confidentiality', 'Integrity'] }],
        Execution_Flow: ['Step 1', 'Step 2'],
        Mitigations: ['Mitigation 1', 'Mitigation 2'],
    };

    beforeEach(() => {
        wrapper = mount(TableRow, {
            props: {
                pattern,
                index: 0,
                activeIndex: -1,
                searchMode: '',
                searchQuery: '',
            },
            components: {
                ChipsBadge
            },
        });
    });

    it('renders the correct number of prerequisites, skills, resources, execution flows, and mitigations', () => {
        const cells = wrapper.findAll('td.text-center');
        expect(cells[0].text()).toBe(`${pattern.Prerequisites.length}`);
        expect(cells[1].text()).toBe(`${pattern.Skills_Required.length}`);
        expect(cells[2].text()).toBe(`${pattern.Resources_Required.length}`);
        expect(cells[3].text()).toBe('High');
        expect(cells[4].text()).toBe('Critical');
        expect(cells[5].text()).toBe(`${pattern.Execution_Flow.length}`);
        expect(cells[6].text()).toBe(`${pattern.Mitigations.length}`);
    });

    it('highlights the search query in the description', async () => {
        await wrapper.setProps({ searchMode: 'highlight', searchQuery: 'pattern' });
        const descriptionDiv = wrapper.find('div.description');
        expect(descriptionDiv.html()).toContain('<mark>pattern</mark>');
    });

    it('toggles the expanded row when clicked', async () => {
        expect(wrapper.vm.expandRow).toBe(false);
        expect(wrapper.find('.expanded-row').exists()).toBe(false);

        await wrapper.find('div.expand-icon-wrapper').trigger('click');
        expect(wrapper.vm.expandRow).toBe(true);
        expect(wrapper.find('.expanded-row').exists()).toBe(true);

        await wrapper.find('div.expand-icon-wrapper').trigger('click');
        expect(wrapper.vm.expandRow).toBe(false);
        expect(wrapper.find('.expanded-row').exists()).toBe(false);
    });

    it('emits the "editDescription" event when the description is double-clicked', async () => {
        const descriptionDiv = wrapper.find('div.description');
        await descriptionDiv.trigger('dblclick');
        expect(wrapper.emitted().editDescription).toBeTruthy();
        expect(wrapper.emitted().editDescription[0]).toEqual([pattern]);
    });

    it('checks the correct consequences based on the scope', () => {
        const checkboxes = wrapper.findAll('input[type="checkbox"]');
        expect(checkboxes[0].element.checked).toBe(true);  // Confidentiality
        expect(checkboxes[1].element.checked).toBe(true);  // Integrity
        expect(checkboxes[2].element.checked).toBe(false); // Authenticity
    });

    it('responds quickly to prop changes', async () => {
        const startTime = performance.now();
        await wrapper.setProps({ searchQuery: 'new query' });
        const endTime = performance.now();
        expect(endTime - startTime).toBeLessThan(50); // Ensure it takes less than 50ms
    });
});
