import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../../service/itemService';

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.html',
  styleUrls: ['./edit-item.scss']
})
export class EditItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onClose() {
    this.itemService.emitEvent.next();
  }

}
