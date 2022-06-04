import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Autor } from "../models/autor.model";

@Injectable({
  providedIn: 'root'
})
export class AutoresServices {
  baseUrl = environment.baseUrl;
  private autoresLista: Autor[] = [];
  private autoresSubject = new Subject<Autor[]>();

  /*private autoresLista: Autor[] = [
    { autorId: 1, nombre: 'Vaxi', apellido: 'Drez', gradoAcademico: 'Ingeniero de Software' },
    { autorId: 2, nombre: 'Lorenzo', apellido: 'Ramirez', gradoAcademico: 'Matematica' },
    { autorId: 3, nombre: 'Juan', apellido: 'Alvarez', gradoAcademico: 'Ciencias de la Computacion' },
    { autorId: 4, nombre: 'Roberto', apellido: 'Arcila', gradoAcademico: 'Ingenieria de Sistemas' }
  ];*/

  constructor(private http: HttpClient) {}

  obtenerAutores() {
    this.http.get<Autor[]>(this.baseUrl + 'api/LibreriaAutor').subscribe((data) => {
      console.log(data);
      this.autoresLista = data;
      this.autoresSubject.next([...this.autoresLista]);
    });
    //return this.autoresLista.slice();
  }

  obtenerActualListener() {
    return this.autoresSubject.asObservable();
  }
}
