import { Routes } from '@angular/router';
import { RouteConfig } from '../../projects/shared/src/lib/models/models';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../../projects/routes/home-route/src/lib/home-route.component').then(c => c.HomeRouteComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../../projects/routes/route1/src/lib/route1.component').then(c => c.Route1Component),
        children: [
            {
              path: 'route3', // Child route of route1
              loadComponent: () => import('../../projects/routes/route3/src/lib/route3.component').then(c => c.Route3Component)
            }
          ]
    },
    {
        path: 'table',
        loadComponent: () => import('../../projects/routes/route2/src/lib/route2.component').then(c => c.Route2Component)
    },

    { 
        path: '', redirectTo: '', pathMatch: 'full'
    },
];

export const routeConfig: RouteConfig[] = [
    { path: '/dashboard', label: 'Dashboard', icon: 'info' },
    { path: '/table', label: 'Table', icon: 'info' }
  ];