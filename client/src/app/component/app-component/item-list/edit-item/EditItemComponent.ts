import {Component, ElementRef, OnInit} from '@angular/core';
import {ItemService} from '../../../../service/itemService';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.html',
  styleUrls: ['./edit-item.scss']
})
export class EditItemComponent implements OnInit {

  nameControl = new FormControl('', [Validators.required]);
  descControl = new FormControl('', [Validators.minLength(5)]);

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
  }

  onClose() {
    this.itemService.emitEvent.next();
  }

  onSubmit(form: NgForm) {
    console.log('submited: ', form);
  }

  getErrorMessage() {
    // if (this.itemControl.hasError('required')) {
    //   return 'You must enter a value dddddd';
    // }
    // if (this.itemControl.hasError('minLength')) {
    //   return 'Min length is 5';
    // }
    // return '';

    return this.nameControl.hasError('required') ? 'You must enter a value' :
       '';
  }

  getErrMes() {
    return 'Min length is 5';
    // return this.descControl.hasError('minLength') ? 'Min length is 5' : '';
  }
}
