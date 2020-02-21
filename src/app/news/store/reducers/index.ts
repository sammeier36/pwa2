import * as fromNews from './news.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface NewsState {

    news: fromNews.NewsItemsState;
}

export const reducers: ActionReducerMap<NewsState> = {

    news: fromNews.newsReducer
};

export const getNewsState = createFeatureSelector<NewsState> ('news');
