import { RouterLink } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { NavBarComponent } from './nav-bar.component';

describe('NavBar', () => {
  it('should render the component', async () => {
    await render(NavBarComponent, {
      imports: [RouterLink],
    });
  });

  it('should display the nav bar item links on render', async () => {
    await render(NavBarComponent, {
      imports: [RouterLink],
      componentProperties: {
        navBarItemLinks: ['link1', 'link2'],
      },
    });

    expect(screen.getByRole("link", { name: /link1/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /link2/i })).toBeInTheDocument();
  });
});
