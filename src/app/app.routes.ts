import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PopularMoviesComponent } from './pages/popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './pages/upcoming-movies/upcoming-movies.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'popular-movies', component: PopularMoviesComponent },
  { path: 'upcoming-movies', component: UpcomingMoviesComponent },
];
