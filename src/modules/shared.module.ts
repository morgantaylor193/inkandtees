import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinkHelper } from 'src/services/link-helper.service';
import { HeaderCenter } from 'src/components/header-center/header-center';
import { Footer } from 'src/components/footer/footer';
import { FeatureImage } from 'src/components/feature-image/feature-image';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    HeaderCenter,
    Footer,
    FeatureImage
  ],
  exports: [
    HeaderCenter,
    Footer,
    FeatureImage
  ],
  providers: [
    LinkHelper
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
