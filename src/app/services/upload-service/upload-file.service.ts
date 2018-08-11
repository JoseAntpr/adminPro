import { Injectable } from '@angular/core';
import { resolve } from '../../../../node_modules/@types/q';
import { URL_SERVICE } from '../../config/config';

@Injectable()
export class UploadFileService {

  constructor() { }

  uploadFile( file: File, tipo: string, id: string) {


    return new Promise( (resolve, reject ) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append( 'image', file, file.name );

      xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4 ) {
          if ( xhr.status === 200 ) {
            console.log('Imagen subida');
            resolve( JSON.parse(xhr.response) );
          } else {
            console.error('Fallo la subida');
            reject( xhr.response );
          }
        }
      };

      const url = URL_SERVICE + '/upload/' + tipo + '/' + id;

      console.log(url);

      xhr.open('PUT', url, true);
      xhr.send( formData );

    });

  }
}
