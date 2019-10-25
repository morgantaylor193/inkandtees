import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from 'src/routes/routes';
import { AppComponent } from './app';
import { IntHomePageModule } from 'src/containers/home/home.module';
import { IntContactPageModule } from 'src/containers/contact/contact.module';
import { IntApparelPageModule } from 'src/containers/apparel/apparel.module';
import { SharedModule } from 'src/modules/shared.module';
import { IntPricingPageModule } from 'src/containers/pricing/pricing.module';
import { IntApparelBrandPageModule } from 'src/containers/apparel-brand/apparel-brand.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    IntApparelBrandPageModule,
    IntApparelPageModule,
    IntPricingPageModule,
    HttpClientJsonpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
