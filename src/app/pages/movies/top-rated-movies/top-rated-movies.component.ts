import { Component, inject, OnInit } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
import type { ApiResponse } from '../../../core/models/api-response';
import type { Media } from '../../../core/models/media.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-top-rated-movies',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './top-rated-movies.component.html',
  styleUrl: './top-rated-movies.component.css',
})
export class TopRatedMoviesComponent implements OnInit {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);

  ngOnInit() {
    this.mediaService.geTopRatedMovies().subscribe((data: ApiResponse) => {
      this.pageTitle = 'Top Rated Movies';
      this.mediaContent = data.results;
    });
  }
}
