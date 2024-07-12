import { HttpClient, HttpHandler } from '@angular/common/http';
import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MediaComponent } from './media.component';

describe('Media', () => {
  it('should render the component', async () => {
    await render(MediaComponent, {
      providers: [HttpClient, HttpHandler],
    });
  });
});
