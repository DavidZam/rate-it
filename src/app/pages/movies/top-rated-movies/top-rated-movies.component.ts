import { Component, inject } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
import { Media } from '../../../models/media';
import { MediaService } from '../../../services/media.service';

@Component({
  selector: 'app-top-rated-movies',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './top-rated-movies.component.html',
  styleUrl: './top-rated-movies.component.css'
})
export class TopRatedMoviesComponent {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);

  ngOnInit() {
    this.mediaService
      .geTopRatedMovies()
      .subscribe((results: { pageTitle: string; media: Media[] }) => {
        this.pageTitle = results.pageTitle;
        this.mediaContent = results.media;
      });
  }
}
