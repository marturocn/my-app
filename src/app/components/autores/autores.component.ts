import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Autor } from 'src/app/models/autor.model';
import { AutoresServices } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit, OnDestroy {
  desplegarColumnas = ['nombre', 'apellido', 'gradoAcademico'];
  dataSource = new MatTableDataSource<Autor>();
  private autorSubscription!: Subscription;

  constructor(private autoresService: AutoresServices) { }

  ngOnInit(): void {
    //this.dataSource.data = this.autoresService.obtenerAutores();
    this.autoresService.obtenerAutores();
    this.autorSubscription = this.autoresService.obtenerActualListener()
      .subscribe((autores: Autor[]) => {
        this.dataSource.data = autores;
      });
  }

  ngOnDestroy(): void {
    this.autorSubscription.unsubscribe();
  }

}
