import { Injectable } from "@angular/core";
import { Autor } from "../models/autor.model";

@Injectable({
  providedIn: 'root'
})
export class AutoresServices {
  private autoresLista: Autor[] =[
    { autorId: 1, nombre: 'Vaxi', apellido: 'Drez', gradoAcademico: 'Ingeniero de Software' },
    { autorId: 2, nombre: 'Lorenzo', apellido: 'Ramirez', gradoAcademico: 'Matematica' },
    { autorId: 3, nombre: 'Juan', apellido: 'Alvarez', gradoAcademico: 'Ciencias de la Computacion' },
    { autorId: 4, nombre: 'Roberto', apellido: 'Arcila', gradoAcademico: 'Ingenieria de Sistemas' }
  ];

  obtenerAutores(): Autor[] {
    return this.autoresLista.slice();
  }
}
