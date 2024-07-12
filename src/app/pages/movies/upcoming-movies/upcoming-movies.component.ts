import { Component, inject } from '@angular/core';
import { MediaComponent } from '../../../components/media/media.component';
import { Media } from '../../../models/media';
import { MediaService } from '../../../services/media.service';

@Component({
  selector: 'app-upcoming-movies',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './upcoming-movies.component.html',
  styleUrl: './upcoming-movies.component.css'
})
export class UpcomingMoviesComponent {
  pageTitle = '';
  mediaContent: Media[] = [];

  mediaService = inject(MediaService);

  ngOnInit() {
    this.mediaService.geUpcomingMovies().subscribe((results: { pageTitle: string, media: Media[]}) => {
      this.pageTitle = results.pageTitle;
      this.mediaContent = results.media;
    });
  }
}
