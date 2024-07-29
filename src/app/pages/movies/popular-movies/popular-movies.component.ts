import { Component, inject, OnInit } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
import { Media } from '../../../core/models/media.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-popular-movies',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './popular-movies.component.html',
  styleUrl: './popular-movies.component.css',
})
export class PopularMoviesComponent implements OnInit {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);

  ngOnInit() {
    this.mediaService
      .getPopularMovies()
      .subscribe((results: { pageTitle: string; media: Media[] }) => {
        this.pageTitle = results.pageTitle;
        this.mediaContent = results.media;
      });
  }
}
