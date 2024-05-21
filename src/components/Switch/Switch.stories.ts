import Switch from './Switch';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { themeColorSubset } from '../../types.ts';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	argTypes: {
		color: { control: 'select', options: Object.keys(themeColorSubset) },
	},
	args: {
		onClick: fn() // spy on the onClick arg, so it will appear in the actions panel once invoked
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	onClick: fn()
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
		...defaultProps,
	},
	tags: ['excludeFromSidebar']
};

export const Default: Story = {
	args: {
		...defaultProps,
		color: 'primary',
	},
	...disableControls
};

export const Secondary: Story = {
	args: {
		...defaultProps,
		color: 'secondary',
		onClick: fn()
	},
	...disableControls
};

export const PrimaryOutline: Story = {
	args: {
		...defaultProps,
		color: 'primary',
		appearance: 'outline'
	},
	...disableControls
};

export const SecondaryOutline: Story = {
	args: {
		...defaultProps,
		color: 'secondary',
		appearance: 'outline'
	},
	...disableControls
};
