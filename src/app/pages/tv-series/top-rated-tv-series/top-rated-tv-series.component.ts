import { Component, inject } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
import { Media } from '../../../core/models/media.interface';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-top-rated-tv-series',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './top-rated-tv-series.component.html',
  styleUrl: './top-rated-tv-series.component.css',
})
export class TopRatedTvSeriesComponent {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);

  ngOnInit() {
    this.mediaService
      .geTopRatedTvSeries()
      .subscribe((results: { pageTitle: string; media: Media[] }) => {
        this.pageTitle = results.pageTitle;
        this.mediaContent = results.media;
      });
  }
}
