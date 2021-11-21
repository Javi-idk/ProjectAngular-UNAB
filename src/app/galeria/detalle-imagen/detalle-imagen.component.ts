import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'ng-detalle-imagen',
  templateUrl: './detalle-imagen.component.html',
  styleUrls: ['./detalle-imagen.component.css']
})
export class DetalleImagenComponent implements OnInit {

  @Input() selectedImagenDetalle!: Imagen;

  constructor() { }

  ngOnInit(): void {
  }

}
