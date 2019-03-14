import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import {ItemState, ItemReducer} from './reducer/ItemReducer';


export interface State {
  items: ItemState;
}

export const reducers: ActionReducerMap<State> = {
  items: ItemReducer
};
