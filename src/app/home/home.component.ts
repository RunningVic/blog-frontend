import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mock_blogs = [
    {
      title : "Mock title",
      author : "Victor",
      date: "2023-01-01",
      views: 123
    },
    {
      title : "Mock title",
      author : "Victor",
      date: "2023-01-01",
      views: 123
    },
    {
      title : "Mock title",
      author : "Victor",
      date: "2023-01-01",
      views: 123
    }
  ]
}
