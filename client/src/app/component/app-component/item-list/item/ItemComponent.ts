import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../../../../model/Item';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ItemService} from '../../../../service/itemService';

@Component({
  selector: 'edit-item',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  item: Item;
  id: number;
  subscription: Subscription;


  constructor(private router: Router, private route: ActivatedRoute) {
    // @ts-ignore
    // this.item = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.parent);
    // this.subscription = this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = params['id'];
    //     }
    //   );

    this.item = this.route.snapshot.data['item'];
    // this.itemService.getItem(this.id).subscribe((data: Item) => {
    //
    //   this.item = data;
    // })

  }

  // It is not necessary
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }


}
