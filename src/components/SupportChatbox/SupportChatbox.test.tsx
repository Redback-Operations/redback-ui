import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { SupportChatbox } from './SupportChatbox';

describe('<SupportChatbox />', () => {
	it('renders', () => {
		renderWithDeps(<SupportChatbox />);

		const supportChatbox = screen.getByTestId('SupportChatbox');

		expect(supportChatbox).toBeInTheDocument();
	});
});
