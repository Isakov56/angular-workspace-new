import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('../../projects/components/dashboard/dashboard.component').then(c => c.DashboardComponent)
    },
    {
        path: 'table',
        loadComponent: () => import('../../projects/components/table/table.component').then(c => c.TableComponent)
    }
];
