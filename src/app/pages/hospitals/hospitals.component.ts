import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  hospitals: Hospital[] = [];

  constructor(public hospitalService: HospitalService) { }

  ngOnInit() {
    this.loadHospitals();
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

  saveHospital( hospital: Hospital) {

  }

  deleteHospital( hospital: Hospital ) {
    this.hospitalService.deleteHospital( hospital._id )
          .subscribe( () => {
            this.loadHospitals();
          });
  }

}
