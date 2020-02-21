import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap, take, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable()
export class NewsGuard implements CanActivate {

    constructor(private store: Store<fromStore.NewsState>) {}

    canActivate(): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getNewsLoaded)
        .pipe(
            tap(loaded => {
                console.log(loaded);
                if (!loaded) {
                    this.store.dispatch(new fromStore.GetNews());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }
}
