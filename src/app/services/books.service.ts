import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Books } from "../models/books.model";
import { PaginationBooks } from "../models/pagination-books.model";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = environment.baseUrl;
  private booksLista: Books[] = [];

  /*private booksLista:Books[] = [
      { libroId: 1, titulo: 'Algoritmos', descripcion: 'Libro Basico', autor: 'Vaxi Drez', precio: 18 },
      { libroId: 2, titulo: 'Angular', descripcion: 'Libro Intermedio', autor: 'Heli Arcila', precio: 25 },
      { libroId: 3, titulo: 'ASP.NET', descripcion: 'Master', autor: 'Juan Arevalo', precio: 30 },
      { libroId: 4, titulo: 'Java', descripcion: 'Agile Libro', autor: 'John Ortiz', precio: 99 }
  ];*/

  bookSubject = new Subject();
  bookPagination!: PaginationBooks;
  bookPaginationSubject = new Subject<PaginationBooks>();
  constructor(private http: HttpClient) {}

  obtenerLibros(libroPorPagina: number, paginaActual: number, sort: string, sortDirection: string, filterValue: any) {
    const request = {
      pageSize: libroPorPagina,
      page: paginaActual,
      sort,
      sortDirection,
      filterValue
    };
    this.http.post<PaginationBooks>(this.baseUrl + 'api/Libro/Pagination', request)
      .subscribe((response) => {
        this.bookPagination = response;
        this.bookPaginationSubject.next(this.bookPagination);
      });
    //return this.booksLista.slice();
  }

  obtenerActualListener() {
    return this.bookPaginationSubject.asObservable();
  }

  guardarLibro(book: Books) {
    //this.booksLista.push(book);
    this.http.post(this.baseUrl + 'api/Libro', book)
      .subscribe((response) => {
        this.bookSubject.next();
      });
  }

  guardarLibroListener() {
    return this.bookSubject.asObservable();
  }
}
