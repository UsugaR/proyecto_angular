import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) }, 
{ path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule) }, 
{ path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) }, 
{ path: 'comentarios', loadChildren: () => import('./comentarios/comentarios.module').then(m => m.ComentariosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
