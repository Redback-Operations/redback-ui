import { screen, fireEvent } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { Accordion } from './Accordion'; 

describe('<Accordion />', () => {
	it('renders', () => {
		renderWithDeps(<Accordion items={[{ title: 'Title', content: 'Content' }]} />);
		
		const titleElement = screen.getByText('Title');
		
		expect(titleElement).toBeInTheDocument();
	});

	it('toggles content on click', () => {
		renderWithDeps(<Accordion items={[{ title: 'Title', content: 'Content' }]} />);
		
		const titleElement = screen.getByText('Title');
		fireEvent.click(titleElement);
		
		const contentElement = screen.getByText('Content');
		expect(contentElement).toBeVisible();

		fireEvent.click(titleElement);
		expect(contentElement).not.toBeVisible();
	});
});


