import { FC } from "react";
import { NavLink } from "react-router-dom";
import { StyledPageHeader } from "./PageHeader.style";

type MenuItem = {
	label: string;
	path: string;
};

type PageHeaderProps = {
	logo: string; // URL or path to the logo image
	menuItems: MenuItem[]; // Array of menu items
	size?: "small" | "large"; // Optional size prop, if needed
};

export const PageHeader: FC<PageHeaderProps> = ({
	logo = "Path/to/logo.png",
	menuItems = [],
	size = "large",
}: PageHeaderProps) => {
	return (
		<StyledPageHeader data-testid="PageHeader" size={size}>
			<div className="header-container">
				{/* Logo Section */}
				<div className="logo-container">
					<img src={logo} alt="Logo" className="logo" />
				</div>
				{/* Menu Section */}
				<nav className="menu-container">
					{menuItems.length > 0 ? (
						menuItems.map((item, index) => (
							<NavLink
								key={index}
								to={item.path}
								className="menu-item"
								activeClassName="active"
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
