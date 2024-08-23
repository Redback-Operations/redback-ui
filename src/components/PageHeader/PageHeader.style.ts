import styled from 'styled-components';

export const StyledPageHeader = styled.header<{ size: 'small' | 'large' }>`
    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: ${props => (props.size === 'small' ? '600px' : '1200px')};
        height: ${props => (props.size === 'small' ? '60px' : '100px')};
        padding: ${props => (props.size === 'small' ? '0.5rem' : '1rem')};
        margin: 0 auto;
        background-color: #333; /* Background color for the header */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional shadow for header */
    }

    .logo-container {
        flex-shrink: 0;
    }

    .logo {
        height: 100%;
        max-height: ${props => (props.size === 'small' ? '50px' : '80px')}; /* Adjust logo size */
        width: auto;
    }

    .menu-container {
        display: flex;
        gap: ${props => (props.size === 'small' ? '0.5rem' : '1rem')}; /* Space between menu items */
    }

    .menu-item {
        all: unset;
        color: white; /* Text color for menu items */
        font-size: ${props => (props.size === 'small' ? '0.8rem' : '1rem')}; /* Font size based on size prop */
        padding: ${props => (props.size === 'small' ? '0.25rem 0.5rem' : '0.5rem 1rem')}; /* Padding around menu items */
        cursor: pointer;
        transition: color 150ms ease-in-out, background-color 150ms ease-in-out; /* Transition for hover effects */
        text-decoration: none; /* Remove underline from links */
    }

    .menu-item:hover {
        color: #ddd; /* Hover text color */
        background-color: rgba(255, 255, 255, 0.1); /* Hover background color */
    }

    .menu-item.active {
        color: #ffd700; /* Active link color */
        font-weight: bold; /* Bold active link */
    }
`;
