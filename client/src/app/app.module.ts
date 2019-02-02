import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { App } from './component/app-component/app';
import {ItemService} from './service/itemService';
import { ItemController } from './component/item-list/itemController';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    ItemController
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ItemService],
  bootstrap: [App]
})
export class AppModule { }
