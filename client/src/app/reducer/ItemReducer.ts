import {GET_ITEMS, ItemAction} from '../action/ItemAction';
import {Item} from '../model/Item';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Observable} from 'rxjs';

export interface ItemState {
  items: Array<Item>;
}

const initialState: ItemState = {
  items: []
}

export function ItemReducer(state = initialState, action: ItemAction) {

  switch (action.type) {
    case GET_ITEMS:
      debugger;
      return {
        items: action.payload
      };
    default: {
      return state;
    }
  }
}

export const getItemState = createFeatureSelector<ItemState>('items');
export const getItems = createSelector(getItemState, (state: ItemState) => state.items);


