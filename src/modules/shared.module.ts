import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinkHelper } from 'src/services/link-helper.service';
import { HeaderCenter } from 'src/components/header-center/header-center';
import { Footer } from 'src/components/footer/footer';
import { FeatureImage } from 'src/components/feature-image/feature-image';
import { CEMailchimpSubscribe } from 'src/components/ce-mailchimp-subscribe/ce-mailchimp-subscribe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  declarations: [
    HeaderCenter,
    Footer,
    FeatureImage,
    CEMailchimpSubscribe
  ],
  exports: [
    HeaderCenter,
    Footer,
    FeatureImage,
    CEMailchimpSubscribe
  ],
  providers: [
    LinkHelper
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
