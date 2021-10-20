import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService,SharedService,SidebarService,UsuarioService , GuardGuard 
  , UploadFileService , ModelUploadService, HospitalService,DoctorService, SearchService,AdminGuard} from './service.index'
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [
    SettingService,SharedService,SidebarService,UsuarioService, GuardGuard , UploadFileService , ModelUploadService, 
    HospitalService , DoctorService, AdminGuard , SearchService,
    
  ]

})
export class ServiceModule { }
