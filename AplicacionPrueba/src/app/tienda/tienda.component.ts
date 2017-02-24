import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Http} from "@angular/http";
import {MasterURLService} from "../services/master-url.service";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
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
          this.tiendas = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearTienda(formulario: NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.tiendas.push(res.json());
        this.nuevaTienda = {};
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        console.log("Ocurrio un error", err);
      },
      () => {
        console.log("Termino la función vamos a las casas")
      }
    );
  }

  borrarTienda(id: number) {
    this._http.delete(this._masterURL.url + "Tienda/" + id).subscribe(
      (res) => {
        let tiendaBorrada = res.json();
        this.tiendas = this.tiendas.filter(value => tiendaBorrada.id != value.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  actualizarTienda(tienda: any) {
    let parameters = {
      nombre: tienda.nombre
    };
    this._http.put(this._masterURL.url + "Tienda/" + tienda.id, parameters)
      .subscribe(
        (res) => {
          tienda.formularioCerrado = !tienda.formularioCerrado;
          console.log("Respuesta: ", res.json());
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
