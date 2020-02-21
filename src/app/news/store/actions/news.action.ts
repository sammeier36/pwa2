import { Action } from '@ngrx/store';
import { News } from '../../models/news.model'



// Get News Items

export const GET_NEWS = '[News Page] Get News';
export const GET_NEWS_SUCCESS = '[News Page] News Loaded Success';
export const GET_NEWS_ERROR = '[News Page] News Loaded Error';

//
export class GetNews implements Action {
    readonly type = GET_NEWS;
}

export class GetNewsSuccess implements Action {
    readonly type = GET_NEWS_SUCCESS;
    constructor(public payload: News[]) {}
}

export class GetNewsError implements Action {
    readonly type = GET_NEWS_ERROR;
    constructor(public payload: any) {}
}

export type NewsActions = GetNews | GetNewsSuccess | GetNewsError;
