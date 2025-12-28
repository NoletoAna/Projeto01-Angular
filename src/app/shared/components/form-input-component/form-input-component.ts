import { Component, Input, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-form-input-component',
  imports: [LucideAngularModule],
  templateUrl: './form-input-component.html',
  styleUrl: './form-input-component.css',
})

export class FormInputComponent {
  @Input() label!:string;
  @Input() placeholder!:string;
  @Input() type!:string;
}
