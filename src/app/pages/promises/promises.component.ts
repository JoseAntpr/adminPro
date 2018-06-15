import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.countThree().then(
      () => console.log('Termino!'),
    )
    .catch( error => console.error('Error en la promesa', error));
  }

  ngOnInit() {
  }

  countThree (): Promise<boolean> {
    return new Promise( (resolve, reject) => {

      let contador = 0;
      const intervalo = setInterval( () => {
        contador += 1;
        console.log( contador );
        if ( contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);

    });

  }

}
