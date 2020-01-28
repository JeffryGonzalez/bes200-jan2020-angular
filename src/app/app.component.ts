import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libraryApiClient';

  response$: Observable<BooksResponse>;
  constructor(private client: HttpClient) {}

  getThem() { console.log('is this thing on?')
    this.response$ = this.client.get<BooksResponse>('http://localhost:1337/books');
  }
}

interface BooksResponse {
  data: BookResponseItem[]
}

interface BookResponseItem {
  id: number;
  title: string;
  author:string;
} 