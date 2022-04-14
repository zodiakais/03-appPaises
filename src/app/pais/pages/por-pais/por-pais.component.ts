import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];
  paisesSugeridos : Country[]=[];
  mostrarSugerencia: boolean = false;

  constructor(private paisService : PaisService) { }

  buscar( termino : string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = false;

    this.paisService.buscarPais( this.termino )
                    .subscribe( (resp) => {

                      this.paises = resp;
                    }, (err) =>{
                      this.hayError = true;
                      this.paises = [];
                    });
  }
  sugerencias(termino : string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarPais( termino )
          .subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
                      (err) => this.paisesSugeridos = []);


  }
  buscarSugerido(termino : string){
    this.buscar( termino );

  }
}
