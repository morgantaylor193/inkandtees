import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../modules/shared.module';
import { IntHome } from './home';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: IntHome
      }
    ])
  ],
  declarations: [
    IntHome
  ],
  exports: [IntHome],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntHomePageModule {}
