import { Component, OnInit } from '@angular/core';
import {EmitService} from '../../../service/EmitService';

@Component({
  selector: 'observer',
  templateUrl: './observer.html',
  styleUrls: ['./observer.scss']
})
export class ObserverComponent implements OnInit {

  clicked: number

  constructor(private emitService: EmitService) {
    emitService.emitEvent.subscribe( (clicked: number) => this.clicked = clicked);
  }

  ngOnInit() {
  }



}
