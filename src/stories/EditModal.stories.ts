import type { Meta, StoryObj } from '@storybook/vue3';
import EditModal from '@/components/EditModal.vue';

const meta: Meta<typeof EditModal> = {
  component: EditModal,
  title: 'Components/EditModal',
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'object' },
      description: 'An object representing the initial form data',
    },
  },
  args: {
    content: {
        title: '',
        body: ''
    },
  },
};

export default meta;

type Story = StoryObj<typeof EditModal>;

const Template: Story = {
  render: (args) => ({
    components: { EditModal },
    setup() {
      return { args };
    },
    template: '<div style="min-height: 500px"><EditModal v-bind="args" /></div>',
  }),
};

export const Multiple: Story = {
  ...Template,
  args: {
    content: {
        title: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non eros vitae ante pulvinar rhoncus. Aliquam volutpat nulla eu orci aliquet lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor ante nisl, sit amet sodales velit condimentum quis.'
    }
  },
};

export const SingleShort: Story = {
  ...Template,
  args: {
    content: {
        title: 'Lorem ipsum',
    }
  },
};

export const SignleLong: Story = {
  ...Template,
  args: {
    content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non eros vitae ante pulvinar rhoncus. Aliquam volutpat nulla eu orci aliquet lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor ante nisl, sit amet sodales velit condimentum quis.'
    }
  },
};

