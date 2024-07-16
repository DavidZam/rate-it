import { RouterLink } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { NavBarLinkComponent } from './nav-bar-link.component';

describe('NavBarLink', () => {
  it('should render', async () => {
    await render(NavBarLinkComponent, {
      imports: [RouterLink],
    });
  });

  it('should display the nav bar item on render', async () => {
    await render(NavBarLinkComponent, {
      imports: [RouterLink],
      componentProperties: {
        link: 'awesome-page',
        label: 'Awesome Page',
      },
    });

    expect(screen.getByRole("link", { name: /Awesome Page/ })).toBeInTheDocument();

  });
});
