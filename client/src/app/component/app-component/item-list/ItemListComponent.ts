import {Component, Inject, OnInit} from '@angular/core';
import {ItemService} from '../../../service/itemService';
import {Item} from '../../../model/Item';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import * as ItemReducer from '../../../reducer/ItemReducer';
import {ItemState} from '../../../reducer/ItemReducer';
import * as ItemAction from '../../../action/ItemAction';


@Component({
  selector: 'item-list',
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.scss']
})
export class ItemListComponent implements OnInit {

  items$: Observable<Array<any>>;

  constructor(private router: Router,
              private itemService: ItemService,
              private store: Store<ItemState>) {

  }

  ngOnInit() {
    this.itemService.listItems();
    this.items$ = this.store.select(ItemReducer.getItems);


    // this.itemService.listItems().subscribe((data: Array<Item>) => {
    //   this.items = data;
    // });
  }

  onEdit(item: Item) {
    console.log('clicked');

    this.router.navigate(['itemControl/', item.id], { state:  item,   }, );

    // const dialogRef = this.dialog.open(Dialog, {
    //   width: '250px',
    //   data: {}
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });

  }
}





