import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MediaComponent } from '@components/media/media.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AiringTodayTvSeriesComponent } from './airing-today-tv-series.component';

describe('Airing Today Tv Series', () => {
  it('should render the component', async () => {
    await render(AiringTodayTvSeriesComponent, {
      imports: [MediaComponent],
      providers: [HttpClient, HttpHandler],
    });
  });
});
