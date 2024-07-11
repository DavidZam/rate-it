import { Component, inject } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../service/movies.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [DatePipe],
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
