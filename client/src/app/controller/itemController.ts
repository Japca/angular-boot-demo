import {Component, OnInit} from '@angular/core';
import {ItemService} from '../service/itemService';
import {Item} from '../model/Item';


@Component({
  selector: 'item-list',
  templateUrl: '../component/item-list/item-list.html',
  styleUrls: ['../component/item-list/item-list.scss']
})
export class ItemController implements OnInit {

  items: Array<Item>;

  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
    this.itemService.listItems().subscribe((data: Array<Item>) => {
          this.items = data;
    });
  }

  onEdit() {
    console.log('clicked');
  }
}

