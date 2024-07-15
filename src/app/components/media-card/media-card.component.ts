import { Component, Input } from '@angular/core';
import { Media } from '../../models/media';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css'
})
export class MediaCardComponent {
  API_IMG_URL = 'https://image.tmdb.org/t/p/w500';
  @Input({ required: true }) media: Media | undefined;

  ngOnInit() {
    console.log(this.media);
  }
}
