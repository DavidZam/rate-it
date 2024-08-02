import { Component, inject, OnInit } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
import type { ApiResponse } from '../../../core/models/api-response';
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
    this.mediaService.getPopularMovies().subscribe((data: ApiResponse) => {
      this.pageTitle = 'Popular Movies';
      this.mediaContent = data.results;
    });
  }
}
