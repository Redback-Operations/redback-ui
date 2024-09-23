import { MenuBar } from './MenuBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/MenuBar',
	component: MenuBar,
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	items: [
		{ label: 'Home', link: '/' },
		{ label: 'About', link: '/about' },
		{ label: 'Services', link: '/services', submenu: [
			{ label: 'Web Development', link: '/services/web' },
			{ label: 'Mobile Development', link: '/services/mobile' }
		]
		},
		{ label: 'Contact', link: '/contact' }
	],
};

export const Default: Story = {
	args: {
		...defaultProps,
	},
};
