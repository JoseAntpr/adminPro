import { Component, Inject,  OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settings: SettingsService) {}

  ngOnInit() {
    this.colocarCheck();
  }

  changeColor(tema: string, link: any) {
    this.aplicarCheck( link );
    this._settings.applyTheme( tema );
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');

    const theme = this._settings.settings.theme;

    for ( const ref of selectores ) {
      if ( ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }


  }

}
