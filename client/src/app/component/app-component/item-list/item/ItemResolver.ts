import {Item} from '../../../../model/Item';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ItemService} from '../../../../service/itemService';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ItemResolve implements Resolve<Item> {

  constructor(private itemService: ItemService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Item> | Promise<Item> | Item  {
    return this.itemService.getItem(Number(route.paramMap.get('id')));
  }
}

