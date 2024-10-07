import { PageHeader } from './PageHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/PageHeader',
	component: PageHeader,
} satisfies Meta<typeof PageHeader>;

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
