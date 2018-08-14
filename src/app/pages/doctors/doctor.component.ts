import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../../services/hospital/hospital.service';
import { Hospital } from '../../models/hospital.model';
import { Medico } from '../../models/medico.model';
import { DoctorService } from '../../services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  hospitals: Hospital[] = [];
  doctor: Medico = new Medico('', '', '', '');
  hospital: Hospital = new Hospital('');

  constructor(
    public hospitalService: HospitalService,
    public doctorService: DoctorService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public modalUploadService: ModalUploadService
  ) {
    this.activatedRoute.params.subscribe( params => {
      const id = params['id'];

      if ( id !== 'new') {
        this.loadDoctor( id );
      }
    });
  }

  ngOnInit() {
    this.hospitalService.loadHospitals()
          .subscribe( hospitals => this.hospitals = hospitals);
    this.modalUploadService.notificacion
          .subscribe( resp => {
            this.doctor.img = resp.doctor.img;
          });
  }

  loadDoctor( id: string ) {
    this.doctorService.getDoctor(id).subscribe( doctor => {
      this.doctor = doctor;
      this.doctor.hospital = doctor.hospital._id;
      this.changeHospital( this.doctor.hospital );

    });
  }

  saveDoctor( f: NgForm) {
    if ( f.invalid) {
      return;
    }

    this.doctorService.saveDoctor( this.doctor )
          .subscribe( doctor => {
            console.log(doctor);
            this.doctor._id = doctor._id;
            this.router.navigate(['/doctor', this.doctor._id]);
          });
  }

  changeHospital( id: string ) {
    console.log(id);
    this.hospitalService.getHospital( id ).subscribe(
      hospital => {
        console.log(hospital);
        this.hospital = hospital;
      }
    );
  }

  changeImg() {
    this.modalUploadService.showModal('doctors', this.doctor._id);
  }

}
