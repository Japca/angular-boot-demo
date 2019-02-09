import {Component, Inject, OnInit} from '@angular/core';
import {ItemService} from '../../../service/itemService';
import {Item} from '../../../model/Item';
import {Router} from '@angular/router';


@Component({
  selector: 'item-list',
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.scss']
})
export class ItemListComponent implements OnInit {

  items: Array<Item>;

  constructor(private itemService: ItemService, private router: Router) {

  }

  ngOnInit() {
    this.itemService.listItems().subscribe((data: Array<Item>) => {
      this.items = data;
    });
  }

  onEdit(item: Item) {
    console.log('clicked');

    this.router.navigate(['item/', item.itemId], { state:  item,   }, );

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





