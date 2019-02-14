import {Component, ElementRef, OnInit} from '@angular/core';
import {ItemService} from '../../../../service/itemService';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Item} from '../../../../model/Item';

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.html',
  styleUrls: ['./edit-item.scss']
})
export class EditItemComponent implements OnInit {

  itemForm: FormGroup;

  // nameControl = new FormControl('', [Validators.required]);
  // descControl = new FormControl('', [Validators.minLength(5)]);

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {

    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onClose() {
    this.itemService.emitEvent.next();
  }

  onSubmit(form: NgForm) {
    debugger;
    console.log('submited: ', form);
    const item = new Item();
    item.name = form.form.value.name;
    item.description = form.form.value.name;
    this.itemService.emitEvent.next({item});
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
