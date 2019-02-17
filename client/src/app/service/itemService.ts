import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ErrorService} from './errorService';
import {Item} from '../model/Item';


import {first} from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  closeEditEvent = new Subject();

  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  listItems(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>('http://localhost:8080/list')
      .pipe(
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
      itemId: item.itemId,
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
