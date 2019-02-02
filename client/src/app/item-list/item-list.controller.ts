import {Component, OnInit} from '@angular/core';
import {ItemService} from '../service/item.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.scss']
})
export class ItemListController implements OnInit {

  items;

  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
    this.itemService.listItems().subscribe(data => {
      this.items = data;
    }, error => {
      console.log(error);
    });
  }

}

