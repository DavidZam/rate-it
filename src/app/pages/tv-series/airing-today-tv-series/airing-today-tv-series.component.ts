import { Component, inject, OnInit } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
import type { ApiResponse } from '../../../core/models/api-response';
import { Media } from '../../../core/models/media.interface';
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

  ngOnInit() {
    this.mediaService.getAiringTodayTvSeries().subscribe((data: ApiResponse) => {
      this.pageTitle = 'Airing Today TV Series';
      this.mediaContent = data.results;
    });
  }
}
