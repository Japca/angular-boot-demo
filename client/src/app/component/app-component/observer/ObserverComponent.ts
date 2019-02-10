import { Component, OnInit } from '@angular/core';
import {EmitService} from '../../../service/EmitService';

@Component({
  selector: 'observer',
  templateUrl: './observer.html',
  styleUrls: ['./observer.scss']
})
export class ObserverComponent implements OnInit {

  clicked: number;
  clickedAsync =  this.emitService.emitEvent;

  constructor(private emitService: EmitService) {
    this.emitService.emitEvent.subscribe( (clicked: number) => this.clicked = clicked);
  }

  ngOnInit() {
  }



}
