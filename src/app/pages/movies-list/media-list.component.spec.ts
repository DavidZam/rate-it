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

  it('should display the Popular Movies message on render', async () => {
    await render(MoviesListComponent, {
      providers: [HttpClient, HttpHandler],
    });

    expect(screen.getByText(/Popular Movies/)).toBeInTheDocument();
  });
});
