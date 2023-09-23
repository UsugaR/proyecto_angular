import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.less'],
})
export class UsuarioComponent {
  usuarios: any[] = [];
  ngOnInit() {
    this.GetAllUsers();
  }
  GetAllUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        this.usuarios = response;
        console.log(this.usuarios);
      });
  }
}
