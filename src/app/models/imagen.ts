import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Imagen {
    constructor(
        public id: string,
        public nombre: string, 
        public description: string,
        public enlace_miniatura: string,
        public enlace_grande: string
    )
    { }
}
