import { Component, inject } from '@angular/core';
import { MediaComponent } from '../../components/media/media.component';
import { Media } from '../../models/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-popular-movies',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './popular-movies.component.html',
  styleUrl: './popular-movies.component.css',
})
export class PopularMoviesComponent {
  pageTitle = '';
  mediaContent: Media[] = [];

  moviesService = inject(MediaService);

  ngOnInit() {
    this.moviesService
      .getPopularMovies()
      .subscribe((results: { pageTitle: string; media: Media[] }) => {
        this.pageTitle = results.pageTitle;
        this.mediaContent = results.media;
      });
  }
}
