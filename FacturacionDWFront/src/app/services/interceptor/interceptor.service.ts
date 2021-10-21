import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('interceptor')
    let token =  JSON.parse(localStorage.getItem("token"))
    let params = new HttpParams()
    let header = new HttpHeaders()

    const headers = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(headers).pipe(     
      catchError(this.mensajeError)
    )

    throw new Error('Method not implemented.');
  }

  mensajeError(error : HttpErrorResponse){
    return throwError(error)
  }
}
