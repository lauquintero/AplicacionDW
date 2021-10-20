import { ActivationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/internal/operators';
import { Title , Meta, MetaDefinition} from '@angular/platform-browser'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  data : any

  constructor(
    private router : Router, 
    private title : Title,
    private meta : Meta) 
  {
    this.getDataRoute().subscribe(
      (result) => {
        this.data = result
        this.title.setTitle(result.titulo)
        this.initMeta()
      }
    )
   }

   initMeta(){
     const metaTag : MetaDefinition = {
       name : "description",
       content : this.title.getTitle()
     }
     this.meta.addTag(metaTag)
   }

  ngOnInit(): void {
  }

  getDataRoute(){
    return this.router.events
    .pipe(
      filter((event) => event instanceof ActivationEnd),  // valida si la instancia es de tipo activationend
      filter((event : ActivationEnd) => event.snapshot.url.length>0),
      map((event: ActivationEnd) => event.snapshot.data  )
    )
  }

}
