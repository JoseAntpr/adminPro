import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { DoctorService } from '../../services/service.index';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: Medico[] = [];

  constructor(
    public doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctorService.loadDoctors()
          .subscribe( doctors => this.doctors = doctors);
  }

  searchMedico( term: string ) {

    if ( term.length < 0 ) {
      this.loadDoctors();
      return;
    }
    this.doctorService.searchDoctors( term )
          .subscribe( doctors => this.doctors = doctors);

  }


  deleteDoctor( doctor: Medico) {
    this.doctorService.deleteDoctor(doctor._id).subscribe(
      () => this.loadDoctors();
    );
  }



}
