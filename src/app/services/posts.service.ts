import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from 'src/models/Posts';

const httpOptions: Object = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPost = () : Observable<Posts[]> => {
    return this.http.get<Posts[]>(this.postUrl);
  }

  savePost = (post: Posts): Observable<Posts> => {
    return this.http.post<Posts>(this.postUrl, post, httpOptions)
  }

  updatePost = (post: Posts): Observable<Posts> => {
    const url: string = `${this.postUrl}/${post.id}`;
    return this.http.put<Posts>(url, post, httpOptions);
  }

  deletePost = (post: Posts | number): Observable<Posts> => {
    const id: (Posts | number) = typeof post === 'number' ? post : post.id;
    console.log(id);
    const url: string = `${this.postUrl}/${id}`;
    return this.http.delete<Posts>(url, httpOptions);
  }
}
