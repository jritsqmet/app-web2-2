import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla2',
  standalone: true,
  imports: [],
  templateUrl: './tabla2.component.html',
  styleUrl: './tabla2.component.css'
})
export class Tabla2Component {

  a="@"
  productos =[
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
  ];

  data = [47,9,0,0,];
 

}
