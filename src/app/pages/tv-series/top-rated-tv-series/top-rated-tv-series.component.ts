import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MediaComponent } from '@components/media/media.component';
import type { ApiResponse } from '@models/api-response';
import type { Media } from '@models/media.interface';
import { MediaService } from '@services/media.service';

@Component({
  selector: 'app-top-rated-tv-series',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './top-rated-tv-series.component.html',
  styleUrl: './top-rated-tv-series.component.css',
})
export class TopRatedTvSeriesComponent implements OnInit {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.mediaService
      .geTopRatedTvSeries()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data: ApiResponse) => {
        this.pageTitle = 'Top Rated TV Series';
        this.mediaContent = data.results;
      });
  }
}
