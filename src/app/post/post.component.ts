import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
})
export class PostComponent {
  posts: any[] = [];

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => {
        this.posts = response;
      });
  }
}
