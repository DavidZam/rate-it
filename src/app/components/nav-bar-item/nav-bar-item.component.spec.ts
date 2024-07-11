import { RouterLink } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { NavBarItemComponent } from './nav-bar-item.component';

describe('NavBarItem', () => {
  it('should render', async () => {
    await render(NavBarItemComponent, {
      imports: [RouterLink],
    });
  });

  it('should display the nav bar item link with the first letter on upper case on render', async () => {
    await render(NavBarItemComponent, {
      imports: [RouterLink],
      componentProperties: {
        itemLink: 'link1',
      },
    });

    expect(screen.getByRole("link", { name: 'Link1' })).toBeInTheDocument();
  });
});
