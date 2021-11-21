import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'ng-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['../galeria.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() imagenComponentImagen!: Imagen;

  constructor() { }

  ngOnInit(): void {
  }

}
