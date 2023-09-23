import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentariosComponent } from './comentarios.component';


@NgModule({
  declarations: [
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    ComentariosRoutingModule
  ]
})
export class ComentariosModule { }
