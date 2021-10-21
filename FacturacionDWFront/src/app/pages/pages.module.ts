import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from "./pages.component";
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from "@angular/common";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PipesModule } from '../pipes/pipes.module';
import { SearchComponent } from '../component/search/search.component';
import { LoadingComponent } from '../component/loading/loading.component';

import { DxButtonModule , DxDataGridModule } from 'devextreme-angular';
import { ProctListComponent } from './proct-list/proct-list.component'



@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent,
        SearchComponent,
        LoadingComponent,
        ProctListComponent
    ],
    exports : [
        DashboardComponent,
    ],
    imports :[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule,
        PipesModule,
        ReactiveFormsModule,
        DxButtonModule,
        DxDataGridModule
    ]

})
export class PagesModule{}