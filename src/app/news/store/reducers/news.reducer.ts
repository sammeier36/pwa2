import { Action } from '@ngrx/store';
import { News } from '../../models/news.model';
import * as newsActions from '../actions/news.action';
import { Component } from '@angular/compiler/src/core';

export interface NewsItemsState {

    entities: { [guid: string]: News};
    loaded: boolean;
    loading: boolean;
}

export const initialState: NewsItemsState = {
    entities: {},
    loading: false,
    loaded: false,
};

export function newsReducer(state = initialState, action: newsActions.NewsActions): NewsItemsState {
    switch (action.type) {
        case newsActions.GET_NEWS: {
            return {
                ...state,
                loading : true
            };
        }
        case newsActions.GET_NEWS_SUCCESS: {
            const news = action.payload;
            const entities = news.reduce(
                (entities: { [id: string]: News}, item: News) => {
                return {
                    ...entities,
                    [item.id]: item

                };
            },
            {
                ...state.entities

            });
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }
        case newsActions.GET_NEWS_ERROR: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }
        default:
            return state;
    }
}

export const getNewsLoading = (state: NewsItemsState) => state.loading;
export const getNewsLoaded = (state: NewsItemsState) => state.loaded;
export const getNewsEntities = (state: NewsItemsState) => state.entities;
