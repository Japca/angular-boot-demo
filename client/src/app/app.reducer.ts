import {Item} from './model/Item';

export interface State {
  items: Array<Item>;
}

const initialState: State = {
  items: []
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'LIST_ITEM':
      return {
        isLoading: true
      };
    default:
      return state;
  }
}
