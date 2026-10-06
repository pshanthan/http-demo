import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}
  posts: Post[] = [];
  getPosts(): Observable<Post[]> {
    return this.httpClient.get(this.apiUrl, (p) => (this.posts = p));
  }
}
