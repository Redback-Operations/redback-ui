import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils.tsx';
import Signup from './Signup';

describe('<Signup />', () => {
	it('renders', () => {
		renderWithDeps(<Signup />);

		const signup = screen.getByTestId('Signup');

		expect(signup).toBeInTheDocument();
	});
});
