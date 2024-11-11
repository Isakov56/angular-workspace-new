import { Routes } from '@angular/router';
import { RouteConfig } from '../../models/models';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('../../projects/shared/components/dashboard/dashboard.component').then(c => c.DashboardComponent)
    },
    {
        path: 'table',
        loadComponent: () => import('../../projects/shared/components/table/table.component').then(c => c.TableComponent)
    },
    { 
        path: '', redirectTo: '', pathMatch: 'full'
    },
];

export const routeConfig: RouteConfig[] = [
    { path: '/dashboard', label: 'Dashboard', icon: 'info' },
    { path: '/table', label: 'Table', icon: 'info' }
  ];