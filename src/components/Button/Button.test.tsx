import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
	test('it should mount', () => {
		render(<Button/>);

		const button = screen.getByTestId('Button');

		expect(button).toBeInTheDocument();
	});
});
