import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ErrorService} from './errorService';
import {Item} from '../model/Item';


import {first} from 'rxjs/operators';
import {Page} from '../model/Page';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

import * as ItemReducer from '../reducer/ItemReducer';
import * as ItemAction from '../action/ItemAction';
import {Store} from '@ngrx/store';
import {ItemState} from '../reducer/ItemReducer';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  closeEditEvent = new Subject();

  constructor(private http: HttpClient,
              private errorService: ErrorService,
              private store: Store<ItemState>) {
  }

  listItems() {
    this.http.get<Array<Item>>('http://localhost:8080/list')
      .pipe(
        catchError(this.errorService.handleError)
      ).subscribe((items: Array<Item>) => {
      this.store.dispatch(new ItemAction.GetItemsActions(items));
    });
  }


  getPage(pageNumber, pageSize): Observable<Page> {
    return this.http.get<Page>('http://localhost:8080/list/page', {
      params: {
        page: pageNumber,
        size: pageSize
      }
    }).pipe(
      catchError(this.errorService.handleError)
    );
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`http://localhost:8080/list/${id}`)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }

  updateItem(item: Item): Observable<Item> {
    const itemDto = {
      id: item.id,
      name: item.name,
      description: item.description
    };
    //   this.http.patch<Item>(`http://localhost:8080`, itemDto)
    //     .forEach((data) => {
    //       console.log("for each");
    //         console.log(data);
    //         this.closeEditEvent.next(data);
    //       }
    //     );
    // }
    //   // .pipe(
    //   //   mapTo(data => this.closeEditEvent.next(data) )
    //   // );

    return this.http.patch<Item>(`http://localhost:8080`, itemDto);
    // .pipe(
    //   first()
    // );
  }


}
