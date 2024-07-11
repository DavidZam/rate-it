import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/media-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent },
];
