import {Action} from '@ngrx/store';
import {Item} from '../model/Item';
import {Observable} from 'rxjs';

export const GET_ITEMS = 'Get all items';

export class GetItemsActions implements Action {
  readonly type = GET_ITEMS;

  constructor(public payload: Array<Item>) {
  }
}

export type ItemAction = GetItemsActions;
