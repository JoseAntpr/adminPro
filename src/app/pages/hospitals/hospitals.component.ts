import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal;

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  hospitals: Hospital[] = [];

  constructor(
    public hospitalService: HospitalService,
    public modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.loadHospitals();
    this.modalUploadService.notificacion
        .subscribe( () => this.loadHospitals());
  }

  loadHospitals() {
    this.hospitalService.loadHospitals()
          .subscribe( hospitals => {
            this.hospitals = hospitals;
          });
  }

  searchHospital( term: string ) {
    if ( term.length < 0 ) {
      this.loadHospitals();
    }
    this.hospitalService.searchHospital( term )
          .subscribe( hospitals => this.hospitals = hospitals );
  }

  createHospital() {
    swal({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then( valor => {
      if ( !valor || valor.length === 0) {
        return;
      }

      this.hospitalService.createHospital( valor )
          .subscribe(() => this.loadHospitals());
    });
  }

  saveHospital( hospital: Hospital) {
    this.hospitalService.updateHospital( hospital )
          .subscribe( );
  }

  deleteHospital( hospital: Hospital ) {
    this.hospitalService.deleteHospital( hospital._id )
          .subscribe( () => {
            this.loadHospitals();
          });
  }

  updateImg( hospital: Hospital ) {
    this.modalUploadService.showModal('hospitals', hospital._id);
  }

}
