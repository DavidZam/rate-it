import { RouterLink } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { NavBarLinkComponent } from '../nav-bar-link/nav-bar-link.component';
import { NavBarComponent } from './nav-bar.component';

describe('NavBar', () => {
  it('should render the component', async () => {
    await render(NavBarComponent, {
      imports: [RouterLink, NavBarLinkComponent],
    });
  });

  it('should display the nav bar items on render', async () => {
    await render(NavBarComponent, {
      imports: [RouterLink],
      componentProperties: {
        navBarItems: new Map([
          ['link1', 'Link 1'],
          ['link2', 'Link 2'],
        ]),
      },
    });

    expect(screen.getByRole('link', { name: /Link 1/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Link 2/ })).toBeInTheDocument();
  });
});
