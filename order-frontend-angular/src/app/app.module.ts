import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import {HttpClientModule} from '@angular/common/http';
import {ItemService} from './service/item.service';
import { CustomerComponent } from './customer/customer.component';
import { ItemNameFilterPipe } from './pipes/item-name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerNameFilterPipe } from './pipes/customer-name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    CustomerComponent,
    ItemNameFilterPipe,
    CustomerNameFilterPipe
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
