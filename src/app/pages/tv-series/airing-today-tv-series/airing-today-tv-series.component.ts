import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MediaComponent } from '../../../components/media/media.component';
import type { ApiResponse } from '../../../core/models/api-response';
import type { Media } from '../../../core/models/media.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-airing-today-tv-series',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './airing-today-tv-series.component.html',
  styleUrl: './airing-today-tv-series.component.css',
})
export class AiringTodayTvSeriesComponent implements OnInit {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.mediaService
      .getAiringTodayTvSeries()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data: ApiResponse) => {
        this.pageTitle = 'Airing Today TV Series';
        this.mediaContent = data.results;
      });
  }
}
