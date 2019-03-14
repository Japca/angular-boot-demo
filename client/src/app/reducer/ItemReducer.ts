import {GET_ITEMS, ItemAction} from '../action/ItemAction';
import {Item} from '../model/Item';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ItemState {
  items: Array<Item>;
}

import * as fromRoot from '../app.reducer';

export interface State extends fromRoot.State {
  item: ItemState;
}

const initState: ItemState = {
  items: []
};

export function ItemReducer(state = initState, action: ItemAction) {

  switch (action.type) {
    case GET_ITEMS:
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
