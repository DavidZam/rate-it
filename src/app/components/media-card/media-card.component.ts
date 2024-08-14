import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Component, Input } from '@angular/core';
import type { Media } from '@models/media.interface';
import { DateFormatPipe } from '@pipes/date-pipe.pipe';

registerLocaleData(localeEs);

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
