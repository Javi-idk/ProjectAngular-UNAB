import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  imagenListaImagenes : Imagen[] = [
    new Imagen('1', 'Playa 1', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere omnis consectetur optio architecto illo repellat dolorum illum nisi, corrupti eaque dicta eveniet ea velit neque quibusdam dolorem ducimus voluptatibus obcaecati.', 
    'https://media.staticontent.com/media/pictures/08ca7a90-8713-4c54-9b3f-9adc43ea1226/300x300', 
    'https://media.staticontent.com/media/pictures/08ca7a90-8713-4c54-9b3f-9adc43ea1226/500x500'),
    new Imagen('2', 'Playa 2', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere omnis consectetur optio architecto illo repellat dolorum illum nisi, corrupti eaque dicta eveniet ea velit neque quibusdam dolorem ducimus voluptatibus obcaecati.', 
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b1/66/f9/caption.jpg?w=300&h=300&s=1', 
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b1/66/f9/caption.jpg?w=500&h=500&s=1'),
    new Imagen('3', 'Playa 3', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere omnis consectetur optio architecto illo repellat dolorum illum nisi, corrupti eaque dicta eveniet ea velit neque quibusdam dolorem ducimus voluptatibus obcaecati.', 
    'https://media.staticontent.com/media/pictures/b1217a2a-7e28-4376-98b8-d161963e0d07/300x300', 
    'https://media.staticontent.com/media/pictures/b1217a2a-7e28-4376-98b8-d161963e0d07/500x500'),
    new Imagen('4', 'Playa 4', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere omnis consectetur optio architecto illo repellat dolorum illum nisi, corrupti eaque dicta eveniet ea velit neque quibusdam dolorem ducimus voluptatibus obcaecati.', 
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/74/99/caption.jpg?w=300&h=300&s=1', 
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/74/99/caption.jpg?w=500&h=500&s=1'),
    new Imagen('5', 'Playa 5', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere omnis consectetur optio architecto illo repellat dolorum illum nisi, corrupti eaque dicta eveniet ea velit neque quibusdam dolorem ducimus voluptatibus obcaecati.', 
    'https://media.staticontent.com/media/pictures/e324fd00-c421-4f96-8a03-cfa03c3a3faa/300x300', 
    'https://media.staticontent.com/media/pictures/e324fd00-c421-4f96-8a03-cfa03c3a3faa/500x500'),
    new Imagen('6', 'Playa 6', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere omnis consectetur optio architecto illo repellat dolorum illum nisi, corrupti eaque dicta eveniet ea velit neque quibusdam dolorem ducimus voluptatibus obcaecati.', 
    'https://media.staticontent.com/media/pictures/a426a186-2479-4f13-8925-01f943983238/300x300', 
    'https://media.staticontent.com/media/pictures/a426a186-2479-4f13-8925-01f943983238/500x500'),
    new Imagen('7', 'Playa 7', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere omnis consectetur optio architecto illo repellat dolorum illum nisi, corrupti eaque dicta eveniet ea velit neque quibusdam dolorem ducimus voluptatibus obcaecati.', 
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/3b/28/caption.jpg?w=300&h=300&s=1', 
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/3b/28/caption.jpg?w=500&h=500&s=1'),
    new Imagen('8', 'Playa 8', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere omnis consectetur optio architecto illo repellat dolorum illum nisi, corrupti eaque dicta eveniet ea velit neque quibusdam dolorem ducimus voluptatibus obcaecati.', 
    'https://media.staticontent.com/media/pictures/6dec1aac-3c76-4ece-98bf-cd43403ad54a/300x300', 
    'https://media.staticontent.com/media/pictures/6dec1aac-3c76-4ece-98bf-cd43403ad54a/500x500'),
  ]

  constructor() { }

  getImagenes(){
    return this.imagenListaImagenes;
  }
}
