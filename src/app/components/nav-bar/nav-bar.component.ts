import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarItemComponent } from '../nav-bar-item/nav-bar-item.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NavBarItemComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navBarItemLinks = ['home', 'movies'];
}
