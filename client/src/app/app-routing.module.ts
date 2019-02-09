import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {App} from './component/app-component/app';
import {ItemComponent} from './component/app-component/item-list/item/ItemComponent';
import {ItemListComponent} from './component/app-component/item-list/ItemListComponent';
import {ItemTableComponent} from './component/app-component/item-table/ItemTableComponent';
import {compareLogSummaries} from '@angular/core/src/render3/styling/class_and_style_bindings';
import {EditItemComponent} from './component/app-component/item-list/edit-item/EditItemComponent';
import {PageNotFoundComponent} from './component/app-component/page-not-found/PageNotFoundComponent';
import {GuardedComponent} from './component/app-component/guarded/GuardedComponent';
import {AuthGuard} from './service/AuthGuard';
import {ItemResolve} from './component/app-component/item-list/item/ItemResolver';

const routes: Routes = [
  {path: '', component: ItemListComponent},
  {path: 'item', component: ItemListComponent},
  {path: 'item/:id', component: ItemComponent,   resolve: { item: ItemResolve }},
  {path: 'item/:id/edit', component: EditItemComponent},
  {path: 'table', component: ItemTableComponent},
  {path: 'guarded', canActivate: [AuthGuard], component: GuardedComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
