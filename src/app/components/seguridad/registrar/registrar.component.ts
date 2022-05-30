import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  registrarUsuario(f: NgForm) {
    this.seguridadService.registrarUsuario({
      email: f.value.email,
      password: f.value.password,
      paterno: f.value.paterno,
      nombre: f.value.nombre,
      username: f.value.nombre,
      userId: f.value.userId
    });
  }

}
