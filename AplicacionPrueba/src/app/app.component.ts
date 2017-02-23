import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";
  colorH4 = "red";
  tamanioH4 = "52px";
  class = "btn btn-block btn-success";

  nuevaTienda: any = {};

  constructor() {
    this.apellido = "Chung";
    this.nombre = "Edison";
    console.log("Inicio el constructor.");
  }

  ngOnInit() {
    this.apellido = "Liu";
    this.nombre = "Alejandro";
    console.log("On Init");
  }

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  hizoClic() {
    console.log("Clic!");
  }

  hizoFocus() {
    console.log("Focus!");
  }

  crearTienda(formulario) {
    console.log(formulario);
  }
}

