import Checkbox from './Checkbox';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { themeColorSubset } from '../../types.ts';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	argTypes: {
		color: { control: 'select', options: Object.keys(themeColorSubset) },
	},
	args: {
		onClick: fn()
	},
} satisfies Meta<typeof Checkbox>;

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

