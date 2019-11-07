import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../modules/shared.module';
import { IntAbout } from './about';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: IntAbout
      }
    ])
  ],
  declarations: [
    IntAbout
  ],
  exports: [IntAbout],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntApparelPageModule {}
