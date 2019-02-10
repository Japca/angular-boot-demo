import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmitService} from '../../../service/EmitService';

@Component({
  selector: 'observable',
  templateUrl: './observable.html',
  styleUrls: ['./observable.scss']
})
export class ObservableComponent implements OnInit {

  clicked = 0;

  constructor(private emitService: EmitService) { }

  ngOnInit() {
  }

  emitAction() {
    this.emitService.emitEvent.next(++this.clicked);
  }
}
