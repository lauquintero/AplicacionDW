import { Injectable,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  setting : ISetting = {
    theme : "default",
    themeURL : "assets/css/colors/default.css"
  }

  constructor(
    @Inject(DOCUMENT) private _document: Document,
  ) { }

  applySetting(viewChild = null){
    this._document.getElementById('theme').setAttribute('href',this.setting.themeURL )
    localStorage.setItem("itemChild",JSON.stringify(viewChild))
    if(viewChild){
      this.applyTheme(viewChild)
    }
  }

  private applyTheme(viewChild){
    let arraySelector : any = this._document.getElementsByClassName("selector") 
    for(let row of arraySelector){
      row.classList.remove('working')
    }
    viewChild.classList.add('working')
    
  }

  saveSettingLocalStorage(){
    localStorage.setItem("setting", JSON.stringify(this.setting))
  }

  loadSettingLocalStorage(){
    let settingLocalStorage = localStorage.getItem("setting")
    if(settingLocalStorage){
      this.setting = JSON.parse(localStorage.getItem("setting"))
    }
    this.applySetting()
  }

  checkItem(){
    let arraySelector : any = this._document.getElementsByClassName("selector") 
    for(let row of arraySelector){
      if(row.getAttribute('data-theme') === this.setting.theme){
        row.classList.add("working")
        break
      }
    }
  }

}

interface ISetting{
  themeURL : string
  theme : string
}