import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
 
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from "./pages.component";
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../component/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from '../component/doughnut-chart/doughnut-chart.component';
import { CommonModule } from "@angular/common";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { UsuaariosComponent } from './usuaarios/usuaarios.component';
import { ModalUploadComponent } from '../component/modal-upload/modal-upload.component';
import { HosptalsComponent } from './hosptals/hosptals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorComponent } from './doctors/doctor.component';
import { SearchComponent } from '../component/search/search.component';
import { LoadingComponent } from '../component/loading/loading.component';
import { SearchPagesComponent } from './search-pages/search-pages.component';



@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        DoughnutChartComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuaariosComponent,
        ModalUploadComponent,
        HosptalsComponent,
        DoctorsComponent,
        DoctorComponent,
        SearchComponent,
        LoadingComponent,
        SearchPagesComponent
    ],
    exports : [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports :[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule,
        PipesModule,
        ReactiveFormsModule
    ]

})
export class PagesModule{}