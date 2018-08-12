import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  hide = '';
  imageUploaded: File;
  temporalImage: string;

  constructor(
    public uploadFileService: UploadFileService,
    public modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
  }

  imageSelection( file ) {
    if ( !file ) {
      this.imageUploaded = null;
      return;
    }
    console.log(file);
    if ( file.type.indexOf('image') < 0 ) {
      swal('Sólo imágenes', 'El arhivo seleccionado no es una image', 'error');
      this.imageUploaded = null;
      return;
    }
    this.imageUploaded = file;

    const reader = new FileReader();
    const urlImageTemp = reader.readAsDataURL( file );

    reader.onloadend = () => this.temporalImage = reader.result;
  }

  uploadImage() {
    console.log('Subiendo imagen');
  }

}
