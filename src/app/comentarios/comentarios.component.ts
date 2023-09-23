import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.less'],
})
export class ComentariosComponent {
  comentarios: any[] = [];

  ngOnInit() {
    this.getAllComentarios();
  }

  getAllComentarios() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((response) => {
        this.comentarios = response;
      });
  }
}
