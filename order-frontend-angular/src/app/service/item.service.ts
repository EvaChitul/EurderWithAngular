import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private urlItems: string;

  constructor(private http: HttpClient) {
    this.urlItems = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this.urlItems);
  }
}
