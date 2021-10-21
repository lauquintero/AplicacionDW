
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// formDocule 
import { FormsModule , ReactiveFormsModule } from '@angular/forms' 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Module
import { PagesModule } from './pages/pages.module';
// Component
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ServiceModule } from './services/service.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';


@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //PagesModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {  provide: HTTP_INTERCEPTORS , useClass : InterceptorService , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

