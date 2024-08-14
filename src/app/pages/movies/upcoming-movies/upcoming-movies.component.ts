import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MediaComponent } from '../../../components/media/media.component';
import type { ApiResponse } from '../../../core/models/api-response';
import type { Media } from '../../../core/models/media.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-upcoming-movies',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './upcoming-movies.component.html',
  styleUrl: './upcoming-movies.component.css',
})
export class UpcomingMoviesComponent implements OnInit {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.mediaService
      .geUpcomingMovies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data: ApiResponse) => {
        this.pageTitle = 'Upcoming Movies';
        this.mediaContent = data.results;
      });
  }
}
