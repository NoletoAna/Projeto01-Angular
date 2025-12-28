import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/components/logo-component/logo-component';
import { FormInputComponent } from '../../shared/components/form-input-component/form-input-component';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../../shared/components/button-component/button-component';
import { LogoIconComponent } from '../../shared/components/logo-icon-component/logo-icon-component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, FormInputComponent, LucideAngularModule, ButtonComponent, LogoIconComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
