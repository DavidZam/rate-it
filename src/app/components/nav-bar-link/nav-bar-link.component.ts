import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-link.component.html',
  styleUrl: './nav-bar-link.component.css',
})
export class NavBarLinkComponent {
  @Input({ required: true }) itemLink = '';
}
