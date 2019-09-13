import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from 'src/routes/routes';
import { AppComponent } from './app';
import { IntHomePageModule } from 'src/containers/home/home.module';
import { IntContactPageModule } from 'src/containers/contact/contact.module';
import { IntTShirtsPageModule } from 'src/containers/t-shirts/t-shirts.module';
import { SharedModule } from 'src/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    Routing,
    IntHomePageModule,
    IntContactPageModule,
    IntTShirtsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
