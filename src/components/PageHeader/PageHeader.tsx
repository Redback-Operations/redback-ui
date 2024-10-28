import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledPageHeader } from './PageHeader.style';
import { ThemeElementSize, ThemeColor } from '../../types';

type MenuItem = {
	label: string;
	path: string;
};

type PageHeaderProps = {
	logo: string; // URL or path to the logo image
	menuItems: MenuItem[]; // Array of menu items
	size?: ThemeElementSize; // Optional size prop, if needed
	color?: ThemeColor;
};

export const PageHeader: FC<PageHeaderProps> = ({
	logo = 'Path/to/logo.png',
	menuItems = [],
	size = 'lg',
	color = 'primary',
}: PageHeaderProps) => {
	return (
		<StyledPageHeader data-testid="PageHeader" $size={size} $color={color}>
			<div className="header-container">
				<div className="logo-container">
					<img src={logo} alt="Logo" className="logo" />
				</div>
				<nav className="menu-container">
					{menuItems.length > 0 ? (
						menuItems.map((item, index) => (
							<NavLink
								key={index}
								to={item.path}
								className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
							>
								{item.label}
							</NavLink>
						))
					) : (
						<p>No menu items available</p>
					)}
				</nav>
			</div>
		</StyledPageHeader>
	);
};
