import { Routes, RouterModule } from '@angular/router';
import { IntHome } from 'src/containers/home/home';
import { IntPricing } from 'src/containers/pricing/pricing';
import { IntContact } from 'src/containers/contact/contact';
import { IntAbout } from 'src/containers/about/about';
import { IntProduct} from 'src/containers/product/product';

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
    path: 'about',
    pathMatch: 'full',
    component: IntAbout
  },
  {
    path: 'product/:id',
    pathMatch: 'full',
    component: IntProduct
  }
];

export const Routing = RouterModule.forRoot(APP_ROUTES, {});
