import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private urlCustomers: string;

  constructor(private http: HttpClient) {
    this.urlCustomers = `${environment.backendUrl}/customers`;
  }

  getCustomers(): Observable<any> {
    return this.http.get<Customer[]>(this.urlCustomers);
  }
}
