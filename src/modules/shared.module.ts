import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinkHelper } from 'src/services/link-helper.service';
import { HeaderCenter } from 'src/components/header-center/header-center';
import { Footer } from 'src/components/footer/footer';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    HeaderCenter,
    Footer
  ],
  exports: [
    HeaderCenter,
    Footer
  ],
  providers: [
    LinkHelper
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
