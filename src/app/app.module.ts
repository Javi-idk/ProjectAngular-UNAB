import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './galeria/carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './navbar/header.component';
import { InformationComponent } from './galeria/information/information.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ListaImagenesComponent } from './galeria/lista-imagenes/lista-imagenes.component';
import { ImagenComponent } from './galeria/lista-imagenes/imagen.component';
import { ImagenService } from './services/imagen.service';
import { DetalleImagenComponent } from './galeria/detalle-imagen/detalle-imagen.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    FooterComponent,
    HeaderComponent,
    InformationComponent,
    GaleriaComponent,
    ListaImagenesComponent,
    ImagenComponent,
    DetalleImagenComponent,
    ContactoComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImagenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
