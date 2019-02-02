import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  listItems() {
    return this.http.get('http://localhost:8080/list');
  }
}
