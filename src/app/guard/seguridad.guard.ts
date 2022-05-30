import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SeguridadService } from "../services/seguridad.service";

@Injectable()
export class SeguridadGuard implements CanActivate {
    constructor(private seguridadService: SeguridadService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log(this.seguridadService.onSesion());
        if (this.seguridadService.onSesion()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}