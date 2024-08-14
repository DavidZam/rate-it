import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MediaComponent } from '../../../components/media/media.component';
import type { ApiResponse } from '../../../core/models/api-response';
import type { Media } from '../../../core/models/media.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-popular-tv-series',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './popular-tv-series.component.html',
  styleUrl: './popular-tv-series.component.css',
})
export class PopularTvSeriesComponent implements OnInit {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.mediaService
      .getPopularTvSeries()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data: ApiResponse) => {
        this.pageTitle = 'Popular TV Series';
        this.mediaContent = data.results;
      });
  }
}
