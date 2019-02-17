import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemComponent} from './component/app-component/item-list/item/ItemComponent';
import {ItemListComponent} from './component/app-component/item-list/ItemListComponent';
import {ItemTableComponent} from './component/app-component/item-table/ItemTableComponent';
import {EditItemComponent} from './component/app-component/item-list/edit-item/EditItemComponent';
import {PageNotFoundComponent} from './component/app-component/page-not-found/PageNotFoundComponent';
import {GuardedComponent} from './component/app-component/guarded/GuardedComponent';
import {AuthGuard} from './service/AuthGuard';
import {ItemResolve} from './component/app-component/item-list/item/ItemResolver';
import {ObParentComponent} from './component/app-component/ob-parent/ObParentComponent';

const routes: Routes = [
  {path: '', component: ItemListComponent},
  {path: 'item', component: ItemListComponent},
  {path: 'itemControl/:id', component: ItemComponent,  /* resolve: { item: ItemResolve }*/},
  {path: 'itemControl/:id/edit', component: EditItemComponent},
  {path: 'table', component: ItemTableComponent},
  {path: 'guarded', canActivate: [AuthGuard], component: GuardedComponent},
  {path: 'rxjs', component: ObParentComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
