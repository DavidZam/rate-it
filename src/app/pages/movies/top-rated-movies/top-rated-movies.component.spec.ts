import { HttpClient, HttpHandler } from '@angular/common/http';
import { MediaComponent } from '@components/media/media.component';
import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { TopRatedMoviesComponent } from './top-rated-movies.component';

describe('Top Rated Movies', () => {
  it('should render the component', async () => {
    await render(TopRatedMoviesComponent, {
      imports: [MediaComponent],
      providers: [HttpClient, HttpHandler],
    });
  });
});
