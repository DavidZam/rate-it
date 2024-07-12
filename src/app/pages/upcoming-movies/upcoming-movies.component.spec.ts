import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MediaComponent } from '../../components/media/media.component';
import { UpcomingMoviesComponent } from './upcoming-movies.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UpcomingMovies', () => {
  it('should render the component', async () => {
    await render(UpcomingMoviesComponent, {
      imports: [MediaComponent],
      providers: [HttpClient, HttpHandler],
    });
  });
});
