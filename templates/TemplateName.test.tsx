import { render, screen } from '@testing-library/react';
import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
	it('should mount', () => {
		render(<TemplateName/>);

		const templateName = screen.getByTestId('TemplateName');

		expect(templateName).toBeInTheDocument();
	});
});
