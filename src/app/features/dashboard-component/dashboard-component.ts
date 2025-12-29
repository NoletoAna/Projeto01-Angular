import { Component } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { DashboardCardComponent } from './components/dashboard-card-component/dashboard-card-component';
import { LucideAngularModule } from 'lucide-angular';
import { BooksReadPerMonthCardComponent } from './components/books-read-per-month-card-component/books-read-per-month-card-component';

@Component({
  selector: 'app-dashboard-component',
  imports: [DashboardCardComponent, LucideAngularModule, BooksReadPerMonthCardComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  constructor(private header: HeaderService){}

  ngOnInit(){
    this.header.setHeader({
      title:'Olá, ',
      user:'Nome Usuário',
      subtitle:'Veja como está indo sua jornada de leitura.',
    })
  }
}
