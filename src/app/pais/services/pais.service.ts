import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return  new HttpParams()
    .set('fields','name,capital,alpha2Code,flags,population');
  }

  constructor(private http : HttpClient) { }

  buscarPais( termino : string ) : Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>(url, {params: this.httpParams});

  }
  buscarCapital( termino : string ) : Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>(url, {params: this.httpParams});

  }
  getPaisPorAlpha( id : string ) : Observable<Country[]>{

    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country[]>(url);

  }
  getPaisPorRegion( regionalBloc : string ) : Observable<Country[]>{


    const url = `${ this.apiUrl }/regionalbloc/${ regionalBloc }`;

    return this.http.get<Country[]>(url, {params: this.httpParams});

  }
}
