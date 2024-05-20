import { SupportChatbox } from './SupportChatbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/SupportChatbox',
	component: SupportChatbox,
} satisfies Meta<typeof SupportChatbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {

};

const disableControls = {
	parameters: {
		controls: {
			disable: true
		},
		actions: {
			disable: true
		},
	}
};

export const Demo: Story = {
	args: {
		...defaultProps
	},
	tags: ['excludeFromSidebar']
};

export const Default: Story = {
	args: {
		...defaultProps
	},
	...disableControls
};
