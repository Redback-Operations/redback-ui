import { render, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('<Accordion />', () => {
  it('renders the accordion component', () => {
    const { getByText } = render(
      <Accordion items={[{ title: 'Title', content: 'Content' }]} />
    );
    expect(getByText('Title')).toBeInTheDocument();
  });

  it('toggles content on click', () => {
    const { getByText } = render(
      <Accordion items={[{ title: 'Title', content: 'Content' }]} />
    );
    const titleElement = getByText('Title');
    fireEvent.click(titleElement);
    expect(getByText('Content')).toBeInTheDocument();
  });
});
