import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card-component',
  imports: [],
  templateUrl: './dashboard-card-component.html',
  styleUrl: './dashboard-card-component.css',
})
export class DashboardCardComponent {
  @Input() title!:string;
  @Input() info!:string;
  @Input() description!:string;
}
