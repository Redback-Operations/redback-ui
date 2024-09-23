import { screen, fireEvent } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { MenuBar } from './MenuBar';

describe('<MenuBar />', () => {
  const items = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services', submenu: [
        { label: 'Web Development', link: '/services/web' },
        { label: 'Mobile Development', link: '/services/mobile' }
      ]
    },
    { label: 'Contact', link: '/contact' }
  ];

  it('renders all primary menu items', () => {
    renderWithDeps(<MenuBar items={items} />);
    
    // Loop through each menu item in the list and check if it is rendered on the page.
    // Regular expression is used to make matching flexible and case-insensitive.
    items.forEach(item => {
      expect(screen.getByText(new RegExp(item.label, 'i'))).toBeInTheDocument();
    });
  });

  it('renders dropdown menu items on hover', () => {
    renderWithDeps(<MenuBar items={items} />);
    
    // Simulate hovering over the "Services" menu item to trigger the dropdown.
    // Regular expression is used to match the "Services" text in a case-insensitive manner.
    fireEvent.mouseOver(screen.getByText(/Services/i));
    
    // After the hover event, verify that the dropdown submenu items "Web Development" and "Mobile Development" are rendered.
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile Development')).toBeInTheDocument();
  });

  it('toggles menu visibility when hamburger icon is clicked', () => {
    renderWithDeps(<MenuBar items={items} />);
    
    // Simulate a click event on the hamburger icon to toggle the visibility of the menu.
    const hamburgerIcon = screen.getByText('☰');
    fireEvent.click(hamburgerIcon);
    
    // Check that all the menu items are visible after clicking the hamburger icon.
    // Regular expression is used to ensure flexible text matching.
    items.forEach(item => {
      expect(screen.getByText(new RegExp(item.label, 'i'))).toBeInTheDocument();
    });
  });
});
