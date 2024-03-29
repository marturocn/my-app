import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatOption } from "@angular/material/core";
import { MatDatepicker } from "@angular/material/datepicker";
import { MatDialog } from "@angular/material/dialog";
import { MatSelectChange } from "@angular/material/select";
import { Subscription } from "rxjs";
import { Autor } from "src/app/models/autor.model";
import { AutoresServices } from "src/app/services/autores.service";
import { BooksService } from "src/app/services/books.service";

@Component({
  selector: 'app-add-book',
  templateUrl: 'add-book.component.html'
})
export class AddBookComponent implements OnInit, OnDestroy {
  selectAutor: string = "";
  selectAutorText: string = "";
  fechaPublicacion: string = "";
  @ViewChild(MatDatepicker) picker!: MatDatepicker<Date>;

  autores: Autor[] = [];

  autorSubscription!: Subscription;

  constructor(private booksService: BooksService, private dialogRef: MatDialog, private autoresService: AutoresServices) { }

  ngOnInit(): void {
    //this.autores = this.autoresService.obtenerAutores();
    this.autoresService.obtenerAutores();
    this.autorSubscription = this.autoresService.obtenerActualListener()
      .subscribe((autoresBackend: Autor[]) => {
        this.autores = autoresBackend;
      });
  }

  selected(event: MatSelectChange) {
    this.selectAutorText = (event.source.selected as MatOption).viewValue;
  }

  guardarLibro(f: NgForm) {
    if (f.valid) {
      this.booksService.guardarLibro({
        libroId: 1,
        descripcion: f.value.descripcion,
        titulo: f.value.titulo,
        autor: this.selectAutorText,
        precio: f.value.precio,
        fechaPublicacion: new Date(this.fechaPublicacion)
      });
      this.dialogRef.closeAll();
    }

  }

  ngOnDestroy(): void {
      this.autorSubscription.unsubscribe();
  }
}
