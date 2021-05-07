import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileGalleryComponent} from './profile-gallery/profile-gallery.component';
import {CustomerComponent} from './customer/customer.component';

const routes: Routes = [{path: 'items', component: ProfileGalleryComponent}, {path: 'customers', component: CustomerComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
