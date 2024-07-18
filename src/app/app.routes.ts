import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Directly lazy loading the Home standalone component
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  // Lazy loading the Movies routing configuration
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.routes').then((m) => m.MOVIES_ROUTES),
  },
  // Lazy loading the TV Series routing configuration
  {
    path: 'tv',
    loadChildren: () =>
      import('./pages/tv-series/tv.routes').then((m) => m.TV_ROUTES),
  },
];
