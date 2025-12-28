import { Component, Input } from '@angular/core';
import { LucideAngularModule, Mail, User } from 'lucide-angular';

@Component({
  selector: 'app-logo-icon',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './logo-icon-component.html',
  styleUrls: ['./logo-icon-component.css'],
})
export class LogoIconComponent {
  @Input() variant: 'default' | 'secondary' = 'default';
}
