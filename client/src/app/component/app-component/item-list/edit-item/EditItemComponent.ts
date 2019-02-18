import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ItemService} from '../../../../service/itemService';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Item} from '../../../../model/Item';
import {Observable} from 'rxjs';

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.html',
  styleUrls: ['./edit-item.scss']
})
export class EditItemComponent implements OnInit {

  itemForm: FormGroup;

  @Input()
  item: Item;

  // nameControl = new FormControl('', [Validators.required]);
  // descControl = new FormControl('', [Validators.minLength(5)]);

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {

    this.itemForm = new FormGroup({

      name: new FormControl(this.item.name, [Validators.required]),
      desc: new FormControl(this.item.description, [Validators.required, Validators.minLength(5)])
    });
  }

  onClose() {
    this.itemService.closeEditEvent.next();
  }

  onSubmit() {
    const item = new Item();
    item.id = this.item.id;
    item.name = this.itemForm.get('name').value;
    item.description = this.itemForm.get('desc').value;
    const item$ = this.itemService.updateItem(item);
    this.itemService.closeEditEvent.next(item$);

    // this.itemService.updateItem(item).subscribe((data: Item) => {
    //   console.log(data)
    //   this.item = data;
    // });

  }

  getErrorMessage() {
    // if (this.itemControl.hasError('required')) {
    //   return 'You must enter a value dddddd';
    // }
    // if (this.itemControl.hasError('minLength')) {
    //   return 'Min length is 5';
    // }
    // return '';

    // return this.itemForm.hasError('required') ? 'You must enter a value' :
    '';
    '';
  }

  getDescErrorMessage() {
    return this.itemForm.get('desc').hasError('required') ? 'You must enter a value' :
      this.itemForm.get('desc').hasError('minlength') ? 'Min length is 5' : '';
  }
}
