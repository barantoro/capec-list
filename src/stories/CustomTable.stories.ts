import type { Meta, StoryObj } from '@storybook/vue3';
import CustomTable from '@/components/CustomTable.vue';
import { MockData } from './assets/MockData';

const meta: Meta<typeof CustomTable> = {
  component: CustomTable,
  title: 'Components/CustomTable',
  tags: ['autodocs'],
  argTypes: {
    tableHeaders: {
      control: { type: 'object' },
      description: 'An array of strings representing the headers for the table columns',
    },
    items: {
      control: { type: 'object' },
      description: 'An array of objects representing the rows to be displayed in the table.',
    },
    searchQuery: {
      control: { type: 'text' },
      description: 'The search query used for highlighting text within the table rows',
    },
    searchMode: {
      control: { type: 'text' },
      description: 'The current search mode, used for highlighting or filtering rows',
    },
  },
  args: {
    tableHeaders: [],
    items: [],
    searchQuery: '',
    searchMode: 'highlight'
  },
};

export default meta;

type Story = StoryObj<typeof CustomTable>;

const Template: Story = {
  render: (args) => ({
    components: { CustomTable },
    setup() {
      return { args };
    },
    template: '<CustomTable v-bind="args" />',
  }),
};

export const Data: Story = {
  ...Template,
  args: {
    items: MockData,
    tableHeaders: ['Description', 'Prerequisites', 'Skills Required', 'Resources Required', 'Likelihood of Attack', 'Typical Severity', 'Consequences', 'Execution Flow', 'Mitigations'],
    searchQuery: '',
    searchMode: ''
  },
};

export const NoData: Story = {
  ...Template,
  args: {
    items: [],
    tableHeaders: ['Description', 'Prerequisites', 'Skills Required', 'Resources Required', 'Likelihood of Attack', 'Typical Severity', 'Consequences', 'Execution Flow', 'Mitigations'],
    searchQuery: '',
    searchMode: ''
  },
};
