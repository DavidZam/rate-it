import { Routes } from '@angular/router';
import { AiringTodayTvSeriesComponent } from './airing-today-tv-series/airing-today-tv-series.component';
import { PopularTvSeriesComponent } from './popular-tv-series/popular-tv-series.component';
import { TopRatedTvSeriesComponent } from './top-rated-tv-series/top-rated-tv-series.component';

export const TV_ROUTES: Routes = [
  { path: 'popular', component: PopularTvSeriesComponent },
  { path: 'top-rated', component: TopRatedTvSeriesComponent },
  { path: 'airing-today', component: AiringTodayTvSeriesComponent },
];
