import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { HomeComponent } from './home.component';

describe('Home', () => {
  it('should render the component', async () => {
    await render(HomeComponent, {
      imports: [],
    });
  });

  it('should display the home component message on render', async () => {
    await render(HomeComponent, {
      componentProperties: {
        homeComponentMsg: 'Test',
      },
    });

    expect(screen.getByRole("heading", { name: /test/i })).toBeInTheDocument();
  });
});
