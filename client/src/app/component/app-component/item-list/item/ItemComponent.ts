import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../../../../model/Item';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ItemService} from '../../../../service/itemService';


@Component({
  selector: 'item',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  showEdit = false;
  item: Item;
  id: number;
  subscription: Subscription;
  emiEventSubscription: Subscription;


  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemService) {
    // @ts-ignore
    // this.itemControl = this.router.getCurrentNavigation().extras.state;
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
    //   this.itemControl = data;
    // })
    this.emiEventSubscription =
      this.itemService.emitEvent.subscribe((item: Item) => {
        this.showEdit = false;
        this.item = item;
      });

  }

  onEdit() {
    this.showEdit = true;

  }

  // It is not necessary
  ngOnDestroy(): void {
    this.emiEventSubscription.unsubscribe();
  }


}
