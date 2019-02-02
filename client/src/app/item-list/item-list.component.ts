import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items;

  constructor(private itemService: ItemService) {
    debugger;
  }

  ngOnInit() {
     debugger;
    // this.carService.listItems().subscribe(data => {
    //   debugger;
    //   this.items = data;
    // });
  }

}

