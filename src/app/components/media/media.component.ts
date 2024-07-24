import { Component, Input } from '@angular/core';
import { Media } from '../../core/models/media.interface';
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
  @Input() pageTitle = '';
  @Input() mediaContent: Media[] = [];
}
