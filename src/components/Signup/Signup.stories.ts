import { Signup } from './Signup';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Signup',
  component: Signup,
} satisfies Meta<typeof Signup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {};

const disableControls = {
  parameters: {
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
};

export const Demo: Story = {
  args: {
    ...defaultProps,
  },
  tags: ['excludeFromSidebar'],
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
  ...disableControls,
};
