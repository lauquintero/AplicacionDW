import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {  map, retry , filter} from 'rxjs/internal/operators';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscribeobser : Subscription

  constructor() {
    this.initObserver()

   }

  ngOnInit(): void {

  }

  ngOnDestroy(){
    console.log("destroy")
    this.subscribeobser.unsubscribe()
  }

  initObserver(){
 // 
    this.returnObserva().pipe(
      retry(2) // captura el error y remite la ejecución
    )
    .subscribe(
      response => {
      console.log("Retry",response)
    },
    error => {
      console.log(error)
    },
    () =>{console.log("El observador termino")})

    // Operator map
    this.returnObservaMapOperator()
    .subscribe(result => {
      console.log("map" ,result)
    })

    this.returnObservaFilterOperator().subscribe(
      result => {
        console.log("filter" , result)
      }
    )

    this.subscribeobser =  this.returnObserverInfiti()
    .subscribe(
      response => {
      console.log("infinit",response)
    },
    error => {
      console.log(error)
    },
    () =>{console.log("Termino")})

  }

  returnObserva() : Observable<number> { 
    return new Observable( observer => {
      let count : number = 0
      
      let interval = setInterval( () =>{
        count ++
        observer.next(count)
        if(count === 3){
          clearInterval(interval)
          observer.complete()
        }else if(count === 2){ // Validar retornar el error
          clearInterval(interval)
          observer.error("Terminar observador con un error")
        }
      },1000 )
    });
  }


  returnObservaMapOperator() : Observable<any> { 
    return new Observable( observer => {
      let count : number = 0
      
      let interval = setInterval( () =>{
        count ++

        let result = {
          count : count
        }

        observer.next(result)
        if(count === 3){
          clearInterval(interval)
          observer.complete()
        }
      },1000 )
    }).pipe(
      map((response : any) =>{
        return response.count + 1
      })
    )
    
  }

  returnObservaFilterOperator() : Observable<any> { 
    return new Observable( observer => {
      let count : number = 0
      
      let interval = setInterval( () =>{
        count ++

        let result = {
          count : count
        }

        observer.next(result)

        if(count === 3){
          clearInterval(interval)
          observer.complete()
        }
      },1000 )
    }).pipe(
      map((response : any) =>{
        return response.count 
      }),
      filter( (value , index) =>{
        if((value % 2) ===1 ){
          return true;
        }else{
          return false
        } 
      })
    )
    
  }


  returnObserverInfiti() : Observable<number> { 
    return new Observable( observer => {
      let count : number = 0
      
      setInterval( () =>{
        count ++
        observer.next(count)
      },1000 )
    });
  }


}
