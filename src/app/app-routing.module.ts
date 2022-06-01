import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './components/autores/autores.component';
import { BooksComponent } from './components/books/books.component';
import { InicioComponent } from './components/incio.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LoginComponent } from './components/seguridad/login/login.component';
import { RegistrarComponent } from './components/seguridad/registrar/registrar.component';
import { SeguridadGuard } from './guard/seguridad.guard';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [SeguridadGuard]},
  { path: 'libros', component: LibrosComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'autores', component: AutoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SeguridadGuard]
})
export class AppRoutingModule { }
