import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  searchText: string;

  constructor(private customerService: CustomerService) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

}
