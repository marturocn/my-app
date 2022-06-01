import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatOption } from "@angular/material/core";
import { MatDatepicker } from "@angular/material/datepicker";
import { MatDialog } from "@angular/material/dialog";
import { MatSelectChange } from "@angular/material/select";
import { Autor } from "src/app/models/autor.model";
import { AutoresServices } from "src/app/services/autores.service";
import { BooksService } from "src/app/services/books.service";

@Component({
  selector: 'app-add-book',
  templateUrl: 'add-book.component.html'
})
export class AddBookComponent implements OnInit {
  selectAutor: string = "";
  selectAutorText: string = "";
  fechaPublicacion: string = "";
  @ViewChild(MatDatepicker) picker!: MatDatepicker<Date>;

  autores: Autor[] = [];

  constructor(private booksService: BooksService, private dialogRef: MatDialog, private autoresService: AutoresServices) {}

  ngOnInit(): void {
    this.autores = this.autoresService.obtenerAutores();
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

  selected(event: MatSelectChange) {
    this.selectAutorText = (event.source.selected as MatOption).viewValue;
  }
}
