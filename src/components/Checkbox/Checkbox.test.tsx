import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
	it('should mount', () => {
		render(<Checkbox/>);

		const checkbox = screen.getByTestId('Checkbox');

		expect(checkbox).toBeInTheDocument();
	});
});
