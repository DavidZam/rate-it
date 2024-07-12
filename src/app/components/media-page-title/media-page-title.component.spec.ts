import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MediaPageTitleComponent } from './media-page-title.component';

describe('MediaPageTitle', () => {
  it('should render the component', async () => {
    await render(MediaPageTitleComponent);
  });

  it('should display the page title message on render', async () => {
    await render(MediaPageTitleComponent, {
      componentProperties: {
        title: 'Amazing Movies Page'
      },
    });

    expect(screen.getByText(/Amazing Movies Page/)).toBeInTheDocument();
  });
});
