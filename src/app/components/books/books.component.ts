import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Books } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';
import { AddBookComponent } from './add-book/add-book.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {
  bookData: Books[] = [];
  desplegarColumnas:string[] = ["titulo", "descripcion", "autor", "precio"];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) ordernamiento!: MatSort;
  @ViewChild(MatPaginator) paginacion!: MatPaginator;
  private bookSubscription!: Subscription;

  constructor(private booksService: BooksService, private dialog: MatDialog) { }

  ngOnInit(): void {
    //this.bookData = this.booksService.obtenerLibros();
    this.dataSource.data = this.booksService.obtenerLibros();
    this.bookSubscription = this.booksService.bookSubject.subscribe(() => {
      this.dataSource.data = this.booksService.obtenerLibros();
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
    this.dialog.open(AddBookComponent,{
      width: '350px'
    });
  }

  ngOnDestroy(): void {
      this.bookSubscription.unsubscribe();
  }
}
