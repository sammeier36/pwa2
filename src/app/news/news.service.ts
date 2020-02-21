import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { News } from './models/news.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // Get all posts from the API

  getAllNews(): Observable<News[]> {

    console.log('GET Templates ');

    return this.http.get<News[]>(`${environment.uri}/api/news`)

    .pipe(
      map((data: any[]) => data.map((item: any) => {
          const idString = item.guid.split('/');
          item.id =  idString[idString.length - 1];
          return item;
       })),
       catchError((error: any) => Observable.throw(error.json()))
       );

       //.pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
