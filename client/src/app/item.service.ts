import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {
  }

  listItems() {
    debugger;
    // return this.http.get('//localhost:8080/list');
  }
}
