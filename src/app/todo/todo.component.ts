import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
})
export class TodoComponent {
  todo: any[] = [];

  ngOnInit() {
    this.getAllToDo();
  }

  async getAllToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(async (listatodo) => {
        var data: any = {};
        listatodo.forEach((element: any) => {
          if (data[element.userId]) {
            data[element.userId]['tareas'].push(element);

            this.todo.push(data[element.userId]);
          } else {
            data[element.userId] = {};
            fetch(
              `https://jsonplaceholder.typicode.com/users/${element.userId}`
            )
              .then((response) => response.json())
              .then((response) => {
                data[element.userId]['usuario'] = response;
              });

            data[element.userId]['tareas'] = [];
            data[element.userId]['tareas'].push(element);
          }
        });

        this.todo = Object.values(data);
      });
  }
}
