import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {defaultOptions: Array<any>, accessLink: Array<any>, customOptions: Array<any>
  } = {defaultOptions: [], accessLink: [], customOptions: [] }

  linksMenu: Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name:'Buscar',
      icon: 'uil-search-alt'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search-alt',
        router: ['/', 'history']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-circle'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-favorite'
      }
    ];

    this.mainMenu.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ];
  }

}
