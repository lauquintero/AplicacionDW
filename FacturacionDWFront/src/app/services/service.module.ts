import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService,SharedService,SidebarService,UsuarioService , GuardGuard , UploadFileService , SearchService,AdminGuard} from './service.index'
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [
    SettingService,SharedService,SidebarService,UsuarioService, GuardGuard , UploadFileService  , AdminGuard , SearchService,
  ]

})
export class ServiceModule { }
