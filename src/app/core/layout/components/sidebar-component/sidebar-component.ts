import { Component } from '@angular/core';
import { LogoComponent } from '../../../../shared/components/logo-component/logo-component';
import { NavButtonComponent } from '../nav-button-component/nav-button-component';
import { LucideAngularModule } from 'lucide-angular';
import { LoggedUserComponent } from '../logged-user-component/logged-user-component';

@Component({
  selector: 'app-sidebar-component',
  imports: [LogoComponent, NavButtonComponent, LucideAngularModule, LoggedUserComponent],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {

}
