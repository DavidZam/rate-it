import { Component, inject } from '@angular/core';
import { MediaCardComponent } from '../../components/media-card/media-card.component';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.css',
})
export class MoviesListComponent {
  movies: Movie[] = [];

  moviesService = inject(MoviesService);

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe((movies: any) => {
      console.log(movies);
      this.movies = movies.results;
    });
  }
}
