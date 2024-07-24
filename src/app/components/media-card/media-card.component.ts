import { Component, Input } from '@angular/core';
import { Media } from '../../core/models/media.interface';
import { DateFormatPipe } from '../../shared/pipes/date-pipe.pipe';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [DateFormatPipe],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css',
})
export class MediaCardComponent {
  API_IMG_URL = 'https://image.tmdb.org/t/p/w500';
  @Input({ required: true }) media: Media | undefined;
}
