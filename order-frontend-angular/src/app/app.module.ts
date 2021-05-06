import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import {HttpClientModule} from '@angular/common/http';
import {ItemService} from './service/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent
  ],
    imports: [
        BrowserModule,
        LayoutModule,
        AppRoutingModule,
      HttpClientModule
    ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
