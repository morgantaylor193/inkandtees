import { Routes, RouterModule } from '@angular/router';
import { IntHome } from 'src/containers/home/home';
import { IntTShirts } from 'src/containers/t-shirts/t-shirts';
import { IntContact } from 'src/containers/contact/contact';
import { IntApparel } from 'src/containers/apparel/apparel';

const APP_ROUTES: Routes = [
  { path: '',
    pathMatch: 'full',
    component: IntHome
  },
  {
    path: 't-shirts',
    pathMatch: 'full',
    component: IntTShirts
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: IntContact
  },
  {
    path: 'apparel/:id',
    pathMatch: 'full',
    component: IntApparel
  }
];

export const Routing = RouterModule.forRoot(APP_ROUTES, {});
