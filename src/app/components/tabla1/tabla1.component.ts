import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla1.component.html',
  styleUrl: './tabla1.component.css'
})
export class Tabla1Component {

  productos=[
    {
      id: 1,
      nombre: "tv",
      precio: 345
    },
    {
      id: 2,
      nombre: "Celular",
      precio: 299
    },
    {
      id: 3,
      nombre: "Tablet",
      precio: 250
    },
    {
      id: 4,
      nombre: "Laptop",
      precio: 1299
    },
    {
      id: 5,
      nombre: "Parlantes",
      precio: 250
    }
  ]

}
