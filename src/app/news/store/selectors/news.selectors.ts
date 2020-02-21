import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromFeature from '../reducers';
import * as fromNews from '../reducers/news.reducer';
import * as fromRouter from '@ngrx/router-store';
import { News } from '../../models/news.model';
import * as fromRoot from '../../../store';

export const getNewsItemsState = createSelector(fromFeature.getNewsState, (state: fromFeature.NewsState) => state.news);

export const getNewsEntities = createSelector(getNewsItemsState, fromNews.getNewsEntities);

export const getSelectedNewsItem = createSelector(

    getNewsEntities,
    fromRoot.getRouterState,
    (entities, router): News => {
        console.log(router);
        return router.state && entities[router.state.params.newsId];
    }
);


export const getAllNews = createSelector(
    getNewsEntities,
    (entities) => {
        // tslint:disable-next-line:variable-name
        return Object.keys(entities).map(id => entities[id]);
    }
);

export const getNewsLoaded = createSelector(getNewsItemsState, fromNews.getNewsLoaded);
export const getNewsLoading = createSelector(getNewsItemsState, fromNews.getNewsLoading);
