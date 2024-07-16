import { Component, inject, Input } from '@angular/core';
import { Media } from '../../core/models/media.interface';
import { MediaService } from '../../core/services/media.service';
import { MediaCardComponent } from '../media-card/media-card.component';
import { MediaPageTitleComponent } from '../media-page-title/media-page-title.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [MediaCardComponent, MediaPageTitleComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css',
})
export class MediaComponent {
  moviesService = inject(MediaService);

  @Input() pageTitle = '';
  @Input() mediaContent: Media[] = [];
}
