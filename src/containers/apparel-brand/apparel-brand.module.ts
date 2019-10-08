import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../modules/shared.module';
import { IntApparelBrand } from './apparel-brand';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: IntApparelBrand
      }
    ])
  ],
  declarations: [
    IntApparelBrand
  ],
  exports: [IntApparelBrand],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntApparelBrandPageModule {}
