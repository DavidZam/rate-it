import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MediaComponent } from '../../../components/media/media.component';
import type { ApiResponse } from '../../../core/models/api-response';
import type { Media } from '../../../core/models/media.interface';
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
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.mediaService
      .getPopularMovies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data: ApiResponse) => {
        this.pageTitle = 'Popular Movies';
        this.mediaContent = data.results;
      });
  }
}
