import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre      : string = 'Capitan America';
  nombre2      : string = 'jOsE enRiquE';
  arreglo     : number[] = [1,2,3,4,5,6,7,8,9,10];
  PI          : number = Math.PI;
  porcentaje  : number = 0.2355;
  salario     : number = 1234.5;
  fecha       : Date   = new Date();
  idioma      : string = 'es'; 
  videoUrl    : string = 'https://www.youtube.com/embed/IS8f74Ba1Ks';
  activar     : boolean = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data')
    }, 4500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }


}
