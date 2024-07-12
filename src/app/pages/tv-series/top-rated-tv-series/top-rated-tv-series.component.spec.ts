import { HttpClient, HttpHandler } from '@angular/common/http';
import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MediaComponent } from '../../../components/media/media.component';
import { TopRatedTvSeriesComponent } from './top-rated-tv-series.component';

describe('Top Rated Tv Series', () => {
  it('should render the component', async () => {
    await render(TopRatedTvSeriesComponent, {
      imports: [MediaComponent],
      providers: [HttpClient, HttpHandler],
    });
  });
});
