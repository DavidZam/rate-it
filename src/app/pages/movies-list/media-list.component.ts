import { Component, inject } from '@angular/core';
import { MediaCardComponent } from '../../components/media-card/media-card.component';
import { Movie } from '../../models/movie';
import { MediaService } from '../../services/media.service';
import { MediaPageTitleComponent } from '../../components/media-page-title/media-page-title.component';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [MediaCardComponent, MediaPageTitleComponent],
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.css',
})
export class MoviesListComponent {
  pageTitle = '';
  movies: Movie[] = [];

  moviesService = inject(MediaService);

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe((movies: any) => {
      this.pageTitle = 'Popular Movies';
      this.movies = movies.results;
    });
  }
}
