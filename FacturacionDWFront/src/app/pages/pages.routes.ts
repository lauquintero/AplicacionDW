import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuaariosComponent } from './usuaarios/usuaarios.component';
import { HosptalsComponent } from './hosptals/hosptals.component';
import { DoctorComponent } from './doctors/doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SearchPagesComponent } from './search-pages/search-pages.component';
import { AdminGuard } from '../services/guard/admin.guard';


const pagesRoutes: Routes = [
    
        
        { path: 'dashboard', component: DashboardComponent, data: { titulo : "Dashboard" } },
        { path: 'progress', component: ProgressComponent, data: { titulo : "Progreso" } },
        { path: 'graficas1', component: Graficas1Component, data: { titulo : "Graficas" } },
        { path: 'accountsetting' , component : AccountSettingsComponent, data: { titulo : "Configuracion" }},
        { path: 'profile' , component : ProfileComponent, data: { titulo : "Perfil de usuario" }},
        { path: 'promesas', component : PromesasComponent, data: { titulo : "promesas" }},
        { path: 'rxjs', component : RxjsComponent, data: { titulo : "Observables" }},
        // mantenimiento 
        { path : 'usuarios' , component : UsuaariosComponent , data :  { titulo : 'Mantenimiento usuarios'}, canActivate : [AdminGuard]},
        { path : 'hospitales' , component : HosptalsComponent , data :  { titulo : 'Mantenimiento hospitales'}},
        { path : 'medicos' , component : DoctorsComponent , data :  { titulo : 'Mantenimiento medicos'}},
        { path : 'medico/:id' , component : DoctorComponent , data :  { titulo : 'Mantenimiento medicos'}},
        { path : 'buscador/:search' , component: SearchPagesComponent , data : { titulo : "Search"}} ,

        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        
    
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
