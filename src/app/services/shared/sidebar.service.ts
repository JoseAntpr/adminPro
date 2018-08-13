import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graphics1' },
        { titulo: 'Promesas', url: '/promises' },
        { titulo: 'RxJs', url: '/rxjs' },
      ]
    },
    {
      titulo: 'Mantenimiento',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'Hospitales', url: '/hospitals' },
        { titulo: 'Médicos', url: '/doctors' },
      ]
    }
  ];

  constructor() { }
}
