import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Books } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';
import { AddBookComponent } from './add-book/add-book.component';
import { Subscription } from 'rxjs';
import { PaginationBooks } from 'src/app/models/pagination-books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {
  bookData: Books[] = [];
  desplegarColumnas: string[] = ["titulo", "descripcion", "autor", "precio"];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) ordernamiento!: MatSort;
  @ViewChild(MatPaginator) paginacion!: MatPaginator;
  private bookSubscription!: Subscription;
  totalLibros = 0;
  librosPorPagina = 2;
  paginaCombo = [1, 2, 5, 10];
  paginaActual = 1;
  sort = 'titulo';
  sortDirection = 'asc';
  filterValue = null;

  constructor(private booksService: BooksService, private dialog: MatDialog) { }

  eventoPaginador(event: PageEvent) {
    this.librosPorPagina = event.pageSize;
    this.paginaActual = event.pageIndex + 1;
    this.booksService.obtenerLibros(this.librosPorPagina, this.paginaActual, this.sort, this.sortDirection, this.filterValue);
  }

  ngOnInit(): void {
    //this.bookData = this.booksService.obtenerLibros();
    /*this.dataSource.data = this.booksService.obtenerLibros();
    this.bookSubscription = this.booksService.bookSubject.subscribe(() => {
      this.dataSource.data = this.booksService.obtenerLibros();
    });*/
    this.booksService.obtenerLibros(this.librosPorPagina, this.paginaActual, this.sort, this.sortDirection, this.filterValue);
    this.booksService.obtenerActualListener()
      .subscribe((pagination: PaginationBooks) => {
        this.dataSource = new MatTableDataSource<Books>(pagination.data);
        this.totalLibros = pagination.totalRows;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.ordernamiento;
    this.dataSource.paginator = this.paginacion;
  }

  hacerFiltro(filtro: string) {
    // https://stackoverflow.com/questions/67123603/angular-error-ts2531-object-is-possibly-null
    this.dataSource.filter = filtro;
  }

  abrirDialog() {
    this.dialog.open(AddBookComponent, {
      width: '350px'
    });
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }
}
