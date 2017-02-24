import {Component, OnInit} from '@angular/core';
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "Bienvenido a Ingresar Tiendas";
  nuevaTienda: any = {};
  tiendas = [];

  disabledButtons = {
    NuevaTiendaFormSubmitButton: false
  }

  constructor(private _http: Http, private _masterURL: MasterURLService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Tienda")
      .subscribe(
        (res) => {
          console.log(res.json());
          this.tiendas = res.json();

        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearTienda(formulario) {
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    console.log(formulario);
    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre
    }).subscribe((res) => {
        console.log("No hubo errores");
        console.log(res);
        this.nuevaTienda = {};
      },
      (err) => {
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        console.log("Error", err);
      },
      () => {
        console.log("Termino la funcion");
      });
  }
}

