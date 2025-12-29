import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-button-component',
  imports: [RouterLinkActive, RouterLink],
  host: {
    class: 'block w-full'
  },
  templateUrl: './nav-button-component.html',
  styleUrl: './nav-button-component.css',
})
export class NavButtonComponent {
  @Input() title!: string
  @Input() route!: string;
}
