import { RouterOutlet } from '@angular/router';
import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

describe('AppComponent', () => {
  it('should render the component', async () => {
    await render(AppComponent, {
      imports: [RouterOutlet, NavBarComponent],
    });
  });
});
