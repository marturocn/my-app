import { Subject } from "rxjs";

export class LibrosService {
    librosSubject = new Subject();
    private libros = ['Libro Uno', 'Libro 2', 'Libro Tres'];

    agregarLibro(libroNombre: string) {
        this.libros.push(libroNombre);
        this.librosSubject.next(this.libros);
    }

    eliminarLibro(libroName: string) {
        this.libros = this.libros.filter(x => x !== libroName);
        this.librosSubject.next(this.libros);
    }

    obtenerLibros() {
        return [...this.libros];
    }
}
