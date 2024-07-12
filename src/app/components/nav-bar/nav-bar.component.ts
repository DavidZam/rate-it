import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarLinkComponent } from '../nav-bar-link/nav-bar-link.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NavBarLinkComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navBarItemLinks = ['home', 'movies'];
}
