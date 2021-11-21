import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  { path: '', redirectTo: '/galeria', pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acercade', component: AcercadeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
