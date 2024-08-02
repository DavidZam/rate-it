import { Component, inject, OnInit } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
import type { ApiResponse } from '../../../core/models/api-response';
import { Media } from '../../../core/models/media.interface';
import { MediaService } from '../../../core/services/media.service';

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

  ngOnInit() {
    this.mediaService.geTopRatedTvSeries().subscribe((data: ApiResponse) => {
      this.pageTitle = 'Top Rated TV Series';
      this.mediaContent = data.results;
    });
  }
}
