import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MediaComponent } from '../../../components/media/media.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PopularMoviesComponent } from './popular-movies.component';

describe('Popular Movies', () => {
  it('should render the component', async () => {
    await render(PopularMoviesComponent, {
      imports: [MediaComponent],
      providers: [HttpClient, HttpHandler],
    });
  });
});
