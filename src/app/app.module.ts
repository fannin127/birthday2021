import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

import {SlideshowModule} from 'ng-simple-slideshow';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDv7b0fuQqIGFQyIZHtVTKPGdlczGCKz3I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
