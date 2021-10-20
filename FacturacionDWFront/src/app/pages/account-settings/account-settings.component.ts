
import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/service.index';



@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( 
    private _settingService : SettingService
    ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this._settingService.checkItem()
  }

  applyColor(value,viewChild){
    this._settingService.setting.themeURL = `assets/css/colors/${ value.datatheme }.css`
    this._settingService.setting.theme = value.datatheme

    this._settingService.applySetting(viewChild)
    this._settingService.saveSettingLocalStorage()
  }

  themefont = [
    {"datatheme":"green"   ,"class":"selector green-theme"},
    {"datatheme":"red"     ,"class":"selector red-theme"},
    {"datatheme":"blue"    ,"class":"selector blue-theme"},
    {"datatheme":"purple"  ,"class":"selector purple-theme"},
    {"datatheme":"megna"   ,"class":"selector megna-theme"},
    {"datatheme":"default" ,"class":"selector default-theme"},
    ]

    themefontdark= [
      {"datatheme":"default-dark" ,"class":"selector default-dark-theme"},
      {"datatheme":"green-dark"   ,"class":"selector green-dark-theme"},
      {"datatheme":"red-dark"     ,"class":"selector red-dark-theme"},
      {"datatheme":"blue-dark"    ,"class":"selector blue-dark-theme"},
      {"datatheme":"purple-dark"  ,"class":"selector purple-dark-theme"},
      {"datatheme":"megna-dark"   ,"class":"selector megna-dark-theme"}
    ]

}
