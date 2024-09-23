import styled from 'styled-components';

// Menu Bar container styling
export const StyledMenuBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #e97462; /* Primary Color */
	padding: 16px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */

	nav {
		display: flex;
		gap: 24px;

		// Hamburger menu: Hidden on large screens, shown on smaller screens
		@media (max-width: 768px) {
			display: none;
			&.open {
				display: block;
			}
		}
	}
`;

// Icon Image styling for the icon.svg from the public folder
export const IconImage = styled.img`
	height: 40px;
	width: 40px;
	margin-right: 16px; /* Adjust margin as necessary */
`;

// MenuItem styling with updated secondary color for text
export const MenuItem = styled.a`
	font-family: 'Inter Tight', sans-serif; /* Font Family */
	font-size: 1rem; /* Default Font Size */
	font-weight: 600; /* Semi-bold for menu items */
	color: #370e4a; /* Updated to Secondary Color */
	text-decoration: none;
	padding: 8px 16px;

	display: flex;
	align-items: center; /* Align text and icon vertically */

	&:hover {
		color: #00aeb2; /* Info color on hover */
		border-bottom: 2px solid #00aeb2; /* Hover effect with Info color */
	}
`;

// Hamburger icon styling for small screens
export const HamburgerIcon = styled.div`
	font-size: 30px;
	cursor: pointer;
	display: none;
	color: #370e4a; /* Secondary color for the hamburger icon */

	@media (max-width: 768px) {
		display: block;
	}
`;

// Dropdown menu styling with updated primary color for background and smooth animation
export const DropdownMenu = styled.div`
	position: relative;
	display: inline-block;

	.dropdown-content {
		display: block;
		position: absolute;
		background-color: #e97462; /* Updated to Primary Color for dropdown */
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
		z-index: 1;
		margin-top: 8px;
		opacity: 0;
		visibility: hidden;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease; /* Smooth transition */

		a {
			font-family: 'Inter Tight', sans-serif; /* Font Family */
			font-size: 0.80rem; /* Small Font Size for dropdown items */
			font-weight: 400; /* Normal font weight for dropdown items */
			color: #f8f9fa; /* Light Color for text inside dropdown */
			padding: 8px 16px;
			text-decoration: none;
			display: block;

			&:hover {
				background-color: #00aeb2; /* Info Color on hover */
				color: white;
			}
		}
	}

	&:hover .dropdown-content {
		opacity: 1;
		visibility: visible;
		max-height: 300px; /* Adjust this value depending on how large your dropdown is */
	}
`;

export const DropdownItem = styled.a`
	font-family: 'Inter Tight', sans-serif; /* Font Family */
	font-size: 0.80rem; /* Small Font Size */
	font-weight: 400; /* Normal font weight */
	padding: 8px 16px;
	display: block;
	text-decoration: none;
	color: #f8f9fa; /* Light Color */

	&:hover {
		background-color: #00aeb2; /* Info color */
		color: white;
	}
`;
