import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmitService} from '../../../service/EmitService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'observer',
  templateUrl: './observer.html',
  styleUrls: ['./observer.scss']
})
export class ObserverComponent implements OnInit, OnDestroy {

  clicked: number;
   clickedAsync =  this.emitService.emitEvent;
   emitEventSubscription: Subscription;

  constructor(private emitService: EmitService) {
    // this.emitService.emitEvent.subscribe( (clicked: number) => this.clicked = clicked);
  }

  ngOnInit() {
    this.emitEventSubscription = this.emitService.emitEvent.subscribe( (clicked: number) => this.clicked = clicked);
  }

  ngOnDestroy(): void {
   this.emitEventSubscription.unsubscribe();
  }


}
