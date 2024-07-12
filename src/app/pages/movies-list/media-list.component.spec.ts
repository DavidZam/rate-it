import { HttpClient, HttpHandler } from '@angular/common/http';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MoviesListComponent } from './media-list.component';

describe('Movie List', () => {
  it('should render the component', async () => {
    await render(MoviesListComponent, {
      providers: [HttpClient, HttpHandler],
    });
  });
});
