import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'ng-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['../galeria.component.css']
})

export class ListaImagenesComponent implements OnInit {
 
  imagenes: Imagen[] = [];
  selectedImagen!: Imagen;

  constructor(
    private imagenService: ImagenService
  ) { }

  ngOnInit(): void {
    this.imagenes = this.imagenService.getImagenes();
  }

  onSelect(imagen: Imagen){
    this.selectedImagen = imagen;
  }
}
