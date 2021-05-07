import { Component, OnInit } from '@angular/core';
import {ItemService} from '../service/item.service';
import {Item} from '../../models/item';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  items: Item[] = [];
  searchText: string;

  createItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: 0,
    stock: 0
  });

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }


  onSubmit(): void{
    this.itemService.addItem(this.createItemForm.value).subscribe(() => this.getItems());
  }

}
