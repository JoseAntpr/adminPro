import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../../services/hospital/hospital.service';
import { Hospital } from '../../models/hospital.model';
import { Medico } from '../../models/medico.model';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {
    this.hospitalService.loadHospitals()
          .subscribe( hospitals => this.hospitals = hospitals);
  }

  saveDoctor( f: NgForm) {
    if ( f.invalid) {
      return;
    }

    this.doctorService.saveDoctor( this.doctor )
          .subscribe( doctor => {
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

}
