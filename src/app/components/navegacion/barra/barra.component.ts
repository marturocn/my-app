import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../../services/seguridad.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario:boolean = false;
  usuarioSubscription = {} as Subscription;

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    console.log(this.estadoUsuario);
    this.usuarioSubscription = this.seguridadService.seguridadCambio.subscribe(status => {
      console.log(status);
      this.estadoUsuario = status;
    });
  }

  onMenuToggleDispatch() {
    this.menuToggle.emit();
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }

  terminarSesion() {
    this.seguridadService.cerrarSesion();
  }

}
