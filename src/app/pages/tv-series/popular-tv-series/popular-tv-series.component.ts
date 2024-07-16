import { Component, inject } from '@angular/core';
import { Media } from '../../../core/models/media.interface';
import { MediaService } from '../../../core/services/media.service';
import { MediaComponent } from '../../../components/media/media.component';

@Component({
  selector: 'app-popular-tv-series',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './popular-tv-series.component.html',
  styleUrl: './popular-tv-series.component.css'
})
export class PopularTvSeriesComponent {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);

  ngOnInit() {
    this.mediaService
      .getPopularTvSeries()
      .subscribe((results: { pageTitle: string; media: Media[] }) => {
        this.pageTitle = results.pageTitle;
        this.mediaContent = results.media;
      });
  }
}
