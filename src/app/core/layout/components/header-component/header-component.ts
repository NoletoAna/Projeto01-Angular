import { Component } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-header-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  header$;

  constructor(private headerService: HeaderService) {
    this.header$ = this.headerService.header$;
  }
}

