import type { Meta, StoryObj } from '@storybook/vue3';
import ChipsBadge from '@/components/ChipsBadge.vue';

const meta: Meta<typeof ChipsBadge> = {
  component: ChipsBadge,
  title: 'Components/ChipsBadge',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'select' },
      options: ['Low', 'Medium', 'High', 'Very High'],
      description: 'The text to display inside the badge',
    },
  },
  args: {
    value: 'Low',
  },
};

export default meta;

type Story = StoryObj<typeof ChipsBadge>;

const Template: Story = {
  render: (args) => ({
    components: { ChipsBadge },
    setup() {
      return { args };
    },
    template: '<ChipsBadge v-bind="args" />',
  }),
};

export const Low: Story = {
  ...Template,
  args: {
    value: 'Low',
  },
};

export const Medium: Story = {
  ...Template,
  args: {
    value: 'Medium',
  },
};

export const High: Story = {
  ...Template,
  args: {
    value: 'High',
  },
};

export const VeryHigh: Story = {
  ...Template,
  args: {
    value: 'Very High',
  },
};
