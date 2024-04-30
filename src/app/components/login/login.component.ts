import { Component } from '@angular/core';
import { Tabla1Component } from '../tabla1/tabla1.component';
import { Tabla2Component } from '../tabla2/tabla2.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Tabla1Component, Tabla2Component],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  visualizar = false

  ocultar(){
    this.visualizar = !this.visualizar;
  }
}
