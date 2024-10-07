import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import LoginForm from './LoginForm';
import { axe } from 'jest-axe';

describe('<LoginForm />', () => {
	it('renders', () => {
		renderWithDeps(<LoginForm />);

		const loginForm = screen.getByTestId('LoginForm');

		expect(loginForm).toBeInTheDocument();
	});

	it('has no accessibility violations', async () => {
		const { container } = renderWithDeps(<LoginForm />);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});
});
