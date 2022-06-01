import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Autor } from 'src/app/models/autor.model';
import { AutoresServices } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  desplegarColumnas = [ 'nombre', 'apellido', 'gradoAcademico' ];
  dataSource = new MatTableDataSource<Autor>();

  constructor(private autoresService: AutoresServices) { }

  ngOnInit(): void {
    this.dataSource.data = this.autoresService.obtenerAutores();
  }

}
