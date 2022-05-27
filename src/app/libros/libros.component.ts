import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-libros',
    templateUrl: './libros.component.html'
})
export class LibrosComponent implements OnInit, OnDestroy {
    libros:string[] = [];
    private libroSubscription: Subscription = new Subscription();

    constructor(private librosService: LibrosService) {
        //
    }

    ngOnDestroy(): void {
        this.libroSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.libros = this.librosService.obtenerLibros();
        this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
            this.libros = this.librosService.obtenerLibros();
        });
    }

    eliminarLibro(libro: any) {
        //
    }

    guardarLibro(f:any) {
        if (f.valid) {
            this.librosService.agregarLibro(f.value.nombreLibro);
        }
    }
}
