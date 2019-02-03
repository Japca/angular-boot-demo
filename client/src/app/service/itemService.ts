import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ErrorService} from './errorService';
import {Item} from '../model/Item';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  listItems() {
    return this.http.get('http://localhost:8080/list')
      .pipe(
        catchError(this.errorService.handleError)
      );
  }

}
