import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils.tsx';
import Modal from './Modal';

describe('<Modal />', () => {
	it('renders', () => {
		renderWithDeps(<Modal />);

		const modal = screen.getByTestId('Modal');

		expect(modal).toBeInTheDocument();
	});
});
