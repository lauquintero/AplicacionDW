import { Pipe, PipeTransform } from '@angular/core'
import { environment } from '../../environments/environment.prod';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  URL = environment.urlServices
  controller = "img/"

  transform(imagen: string, tipo: string = 'usuarios'): unknown {
    if(imagen){
      if(imagen.indexOf("https") > -1)
        return imagen
      else{
        let url  = this.URL
        url = url + this.controller+ tipo + '/' + imagen
        return url
      }
    }else {
      return 'assets/image/no-img.jpg'
    }
  }

}
