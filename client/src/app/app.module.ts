import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {App} from './component/app-component/app';
import {ItemService} from './service/itemService';
import {ItemListComponent} from './component/app-component/item-list/ItemListComponent';
import {HttpClientModule} from '@angular/common/http';
import {ItemComponent} from './component/app-component/item-list/item/ItemComponent';
import {
  MatButtonModule,
  MatCardModule,
  MatDialog,
  MatFormField,
  MatInputModule,
  MatLabel,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {ItemTableComponent} from './component/app-component/item-table/ItemTableComponent';
import {EditItemComponent} from './component/app-component/item-list/edit-item/EditItemComponent';
import {PageNotFoundComponent} from './component/app-component/page-not-found/PageNotFoundComponent';
import {GuardedComponent} from './component/app-component/guarded/GuardedComponent';
import {ErrorService} from './service/errorService';
import {AuthService} from './service/AuthService';
import {AuthGuard} from './service/AuthGuard';
import {ObservableComponent} from './component/app-component/observable/ObservableComponent';
import {ObserverComponent} from './component/app-component/observer/ObserverComponent';
import {ObParentComponent} from './component/app-component/ob-parent/ObParentComponent';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    App,
    ItemListComponent,
    ItemComponent,
    ItemComponent,
    ItemTableComponent,
    EditItemComponent,
    PageNotFoundComponent,
    GuardedComponent,
    ObservableComponent,
    ObserverComponent,
    ObParentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ErrorService, AuthService, AuthGuard],
  bootstrap: [App],
  entryComponents: []
})
export class AppModule {
}
