import { FC, useState } from 'react';
import { StyledMenuBar, MenuItem, HamburgerIcon, DropdownMenu, DropdownItem, IconImage } from './MenuBar.style';

type MenuBarProps = {
	items: { label: string, link: string, submenu?: { label: string, link: string }[] }[];
};

export const MenuBar: FC<MenuBarProps> = ({ items }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<StyledMenuBar>
			{/* Only icon.svg from public folder */}
			<IconImage src="/icon.svg" alt="Menu Icon" />
			<HamburgerIcon onClick={toggleMenu}>
				☰
			</HamburgerIcon>
			<nav className={isOpen ? 'open' : ''}>
				{items.map((item, index) => (
					<div key={index}>
						{item.submenu ? (
							<DropdownMenu>
								<MenuItem href={item.link}>
									{item.label} ▼
								</MenuItem>
								<div className="dropdown-content">
									{item.submenu.map((subItem, subIndex) => (
										<DropdownItem key={subIndex} href={subItem.link}>
											{subItem.label}
										</DropdownItem>
									))}
								</div>
							</DropdownMenu>
						) : (
							<MenuItem href={item.link}>
								{item.label}
							</MenuItem>
						)}
					</div>
				))}
			</nav>
		</StyledMenuBar>
	);
};

