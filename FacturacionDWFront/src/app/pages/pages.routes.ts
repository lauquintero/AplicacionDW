import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { GuardGuard } from '../services/service.index';
import { AdminGuard } from '../services/guard/admin.guard';
import { ProctListComponent } from './proct-list/proct-list.component';


const pagesRoutes: Routes = [
    
        
        { path: 'dashboard', component: DashboardComponent, data: { titulo : "Dashboard" } },
        { path: 'accountsetting' , component : AccountSettingsComponent, data: { titulo : "Configuracion" }},
        // mantenimiento 
        { path : 'productos' , component : ProctListComponent  , data: { titulo :"Productos" }},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
