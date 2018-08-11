import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICE } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, tipo: string = 'user'): any {

    let url = URL_SERVICE + '/img';

    if ( !img ) {
      return url + '/usuarios/xxx';
    }
    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch ( tipo ) {
      case 'user':
       url += 'users/' + img;
       break;
      case 'doctor':
        url += 'users/' + img;
        break;
      case 'hospital':
        url += 'users/' + img;
        break;
      default:
        console.log('Tipo de imagen no exite');
        url += 'usuarios/xxx';
    }
    return url;
  }

}
