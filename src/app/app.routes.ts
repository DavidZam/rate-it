import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PopularMoviesComponent } from './pages/movies/popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './pages/movies/upcoming-movies/upcoming-movies.component';
import { PopularTvSeriesComponent } from './pages/tv-series/popular-tv-series/popular-tv-series.component';
import { TopRatedTvSeriesComponent } from './pages/tv-series/top-rated-tv-series/top-rated-tv-series.component';
import { TopRatedMoviesComponent } from './pages/movies/top-rated-movies/top-rated-movies.component';
import { AiringTodayTvSeriesComponent } from './pages/tv-series/airing-today-tv-series/airing-today-tv-series.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'popular-movies', component: PopularMoviesComponent },
  { path: 'upcoming-movies', component: UpcomingMoviesComponent },
  { path: 'popular-tv', component: PopularTvSeriesComponent },
  { path: 'top-rated-tv', component: TopRatedTvSeriesComponent },
  { path: 'top-rated-movies', component: TopRatedMoviesComponent },
  { path: 'top-rated-tv', component: TopRatedTvSeriesComponent },
  { path: 'airing-today-tv', component: AiringTodayTvSeriesComponent },
];
