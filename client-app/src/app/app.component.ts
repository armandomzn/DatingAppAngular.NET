import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client-app';
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: (response) => {
        console.log(response);
        this.users = response;
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Request completed');
      },
    });
  }
}
