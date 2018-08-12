import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  settings: Settings = {
    urlTheme: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse (localStorage.getItem('settings'));
      this.applyTheme(this.settings.theme);
    } else {
      this.applyTheme(this.settings.theme);
    }
  }

  guardarSettings() {
    localStorage.setItem('settings', JSON.stringify( this.settings ));
  }

  applyTheme( theme: string) {
    const url = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.settings.theme = theme;
    this.settings.urlTheme = url;

    this.guardarSettings();
  }
}

interface Settings {
  urlTheme: string;
  theme: string;
}
