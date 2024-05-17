import { render, screen } from '@testing-library/react';
import ImageSlider from './ImageSlider';

describe('<ImageSlider />', () => {
	it('should mount', () => {
		render(<ImageSlider/>);

		const imageSlider = screen.getByTestId('ImageSlider');

		expect(imageSlider).toBeInTheDocument();
	});
});
