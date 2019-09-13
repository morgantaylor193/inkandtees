import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinkHelper } from 'src/services/link-helper.service';
import { Header } from 'src/components/header/header';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    Header
  ],
  exports: [
    Header
  ],
  providers: [
    LinkHelper
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
