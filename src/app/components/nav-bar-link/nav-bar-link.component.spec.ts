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

  it('should display the nav bar item link with the first letter on upper case on render', async () => {
    await render(NavBarLinkComponent, {
      imports: [RouterLink],
      componentProperties: {
        itemLink: 'link1',
      },
    });

    expect(screen.getByRole("link", { name: 'Link1' })).toBeInTheDocument();
  });
});
