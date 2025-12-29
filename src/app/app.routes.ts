import { Routes } from '@angular/router';
import { ControlFlow } from './component/control-flow/control-flow';
import { DataBinding } from './component/data-binding/data-binding';
import { Signal } from './component/signal/signal';
import { AttributesDierctive } from './component/attributes-dierctive/attributes-dierctive';
import { NotFound } from './component/not-found/not-found';
import { PhotosCrud } from './component/photos-crud/photos-crud';
import { User } from './component/user/user';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'control-flow',
    pathMatch: 'full',
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: Signal,
  },
  {
    path: 'attributes',
    component: AttributesDierctive,
  },
  {
    path: 'photos-crud',
    component: PhotosCrud,
  },
  {
    path: 'user-crud',
    component: User,
  },
  {
    // wild card route
    path: '**',
    component: NotFound,
  },
];
