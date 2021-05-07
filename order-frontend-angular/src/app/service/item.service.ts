import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../../models/item';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private urlItems: string;

  constructor(private http: HttpClient) {
    this.urlItems = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this.urlItems).pipe(map(response => response.sort((a: Item, b: Item) => a.name.localeCompare(b.name))));
  }

  addItem(item: Item){
    return this.http.post(this.urlItems, item);
  }
}
