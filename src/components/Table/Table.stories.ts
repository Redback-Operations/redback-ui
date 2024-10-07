import { Table } from './Table';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Table',
	component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
	{ key: 'name', label: 'name' },
	{ key: 'age', label: 'age' },
	{ key: 'address', label: 'address' },
  ];
  
  const data = [
	{ name: 'Anand Medarametla', age: 24, address: '123 Main St' },
	{ name: 'John', age: 25, address: '456 Elm St' },
  ];


const defaultProps = {
	columns,
	data
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
