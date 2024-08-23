import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
	it('renders', () => {
		renderWithDeps(<PageHeader />);

		const pageHeader = screen.getByTestId('PageHeader');

		expect(pageHeader).toBeInTheDocument();
	});
});
