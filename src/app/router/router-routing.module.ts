import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './../usuario/usuario.component';  
import { TodoComponent } from '../todo/todo.component';
import { PostComponent } from '../post/post.component';
import { ComentariosComponent } from '../comentarios/comentarios.component';

const routes: Routes = [
  { path: '/usuario', component: UsuarioComponent},
  { path: '/todos', component: TodoComponent},
  {path: '/post', component: PostComponent },
  { path: '/comentarios', component: ComentariosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
