import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NewsService } from '../../news.service';
import * as newsActions from '../actions/news.action';



@Injectable()
export class NewsEffects {

  constructor(private actions$: Actions, private newsService: NewsService) {}

  @Effect()
  getTemplates$ = this.actions$
    .pipe( ofType(newsActions.GET_NEWS),
      switchMap(() => {
        return this.newsService.getAllNews().pipe(
          map(news => new newsActions.GetNewsSuccess(news)),
          catchError(error => of(new newsActions.GetNewsError (error)))
        );
      })
    );


}
