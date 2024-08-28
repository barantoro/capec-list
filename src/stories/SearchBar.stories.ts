import type { Meta, StoryObj } from '@storybook/vue3';
import SearchBar from '@/components/SearchBar.vue';
import CustomTable from '@/components/CustomTable.vue';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: 'Components/SearchBar',
  tags: ['autodocs'],
  argTypes: {
    searchQuery: {
      control: { type: 'text' },
      description: 'Emitted when the search query changes'
    },
    searchMode: {
        control: { type: 'radio' },
        options: ['highlight', 'filter'],
        description: 'Emitted when the search mode changes.'
      },
  },
  args: {
    searchQuery: '',
    searchMode: 'highlight',
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

const Template: Story = {
  render: (args) => ({
    components: { SearchBar },
    setup() {
      return { args };
    },
    template: '<SearchBar v-bind="args" />',
  }),
};

export const Highlight: Story = {
  ...Template,
  args: {
    searchMode: 'highlight',
  },
};

export const Filter: Story = {
  ...Template,
  args: {
    searchMode: 'filter',
  },
};

export const Query: Story = {
  ...Template,
  args: {
    searchQuery: 'Lorem ipsum dolor',
  },
};
