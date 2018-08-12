import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  public type: string;
  public id: string;

  public hide = '';

  public notificacion = new EventEmitter<any>();

  constructor() {
    console.log('Modal upload listo');
  }

  hideModal() {

  }

  showModal() {
    
  }
}
