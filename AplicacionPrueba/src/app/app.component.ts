import {Component, OnInit} from '@angular/core';
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

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

  error: string = "No hay errores";

  nuevaTienda: any = {};

  disabledButtons = {
    NuevaTiendaFormSubmitButton:false
  }

  constructor(private _http: Http, private _masterURL: MasterURLService) {
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
    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre
    }).subscribe((res) => {
        console.log("No hubo errores");
        console.log(res);
        this.nuevaTienda = {};
      },
      (err) => {
        console.log("Error", err);
      },
      () => {
        console.log("Termino la funcion");
      });
  }
}

