import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { MarkdownContent } from './MarkdownContent';
import demoContent from './MarkdownContentDemoFile.mdx';

describe('<MarkdownContent />', () => {
	it('renders the content', () => {
		renderWithDeps(<MarkdownContent markdown={demoContent} />);

		expect(screen.getByRole('heading', { name: 'Demo Markdown Content' })).toBeVisible();
	});
});
