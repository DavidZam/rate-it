import { Component, inject, OnInit } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
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
    this.mediaService
      .getAiringTodayTvSeries()
      .subscribe((results: { pageTitle: string; media: Media[] }) => {
        this.pageTitle = results.pageTitle;
        this.mediaContent = results.media;
      });
  }
}
