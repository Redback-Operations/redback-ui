import { render, screen } from '@testing-library/react';
import Switch from './Switch';

describe('<Switch />', () => {
	it('should mount', () => {
		render(<Switch/>);

		const switch = screen.getByTestId('Switch');

		expect(switch).toBeInTheDocument();
	});
});
