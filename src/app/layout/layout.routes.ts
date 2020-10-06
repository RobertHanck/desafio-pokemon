import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)

      },
      {
        path: 'view',
        loadChildren: () => import('../pages/view/view.module').then(m => m.ViewModule)
      }
    ]
  }
];

export const LayoutRoutes = RouterModule.forChild(LAYOUT_ROUTES);
