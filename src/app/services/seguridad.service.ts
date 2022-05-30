import { Usuario } from "../models/usuario.model";
import { LoginData } from "../models/login-data.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class SeguridadService {
    // https://bobbyhadz.com/blog/typescript-interface-empty-object
    private user = {} as Usuario;
    seguridadCambio = new Subject<boolean>();

    constructor(private router: Router) {}

    registrarUsuario(usr: Usuario) {
        this.user = {
            email: usr.email,
            userId: Math.round(Math.random() * 10000).toString(),
            nombre: usr.nombre,
            paterno: usr.paterno,
            username: usr.username,
            password: usr.password
        };
        this.seguridadCambio.next(true);
        this.router.navigate(['/']);
    }

    login(loginData: LoginData) {
        this.user = {
            email: loginData.email,
            userId: Math.round(Math.random() * 10000).toString(),
            nombre: '',
            paterno: '',
            username: '',
            password: ''
        };
        this.seguridadCambio.next(true);
        this.router.navigate(['/']);
    }

    cerrarSesion() {
        this.user = <Usuario>{};
        this.seguridadCambio.next(false);
        console.log(this.user);
        this.router.navigate(['/login']);
    }

    /*getUsuario() {
        return {...this.user};
    }*/

    onSesion() {
        //return this.user != null;
        return Object.keys(this.user).length !== 0;
    }
}
