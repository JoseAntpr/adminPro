import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../../services/hospital/hospital.service';
import { Hospital } from '../../models/hospital.model';
import { Medico } from '../../models/medico.model';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  hospitals: Hospital[] = [];
  doctor: Medico = new Medico();

  constructor(
    public hospitalService: HospitalService,
    public doctorService: DoctorService
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
          .subscribe( doctor => console.log(doctor));
  }

}
