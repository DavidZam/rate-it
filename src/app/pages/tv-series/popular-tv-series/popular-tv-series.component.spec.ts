import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MediaComponent } from '@components/media/media.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PopularTvSeriesComponent } from './popular-tv-series.component';

describe('Popular Tv Series', () => {
  it('should render the component', async () => {
    await render(PopularTvSeriesComponent, {
      imports: [MediaComponent],
      providers: [HttpClient, HttpHandler],
    });
  });
});
