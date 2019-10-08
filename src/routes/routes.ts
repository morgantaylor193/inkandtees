import { Routes, RouterModule } from '@angular/router';
import { IntHome } from 'src/containers/home/home';
import { IntPricing } from 'src/containers/pricing/pricing';
import { IntContact } from 'src/containers/contact/contact';
import { IntApparel } from 'src/containers/apparel/apparel';
import { IntApparelBrand } from 'src/containers/apparel-brand/apparel-brand';

const APP_ROUTES: Routes = [
  { path: '',
    pathMatch: 'full',
    component: IntHome
  },
  {
    path: 'pricing',
    pathMatch: 'full',
    component: IntPricing
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: IntContact
  },
  {
    path: 'apparel',
    pathMatch: 'full',
    component: IntApparel
  },
  {
    path: 'apparel/:id',
    pathMatch: 'full',
    component: IntApparelBrand
  }
];

export const Routing = RouterModule.forRoot(APP_ROUTES, {});
