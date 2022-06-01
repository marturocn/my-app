import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/ejemplo/usuario.component';
import { InicioComponent } from './components/incio.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibrosService } from './services/libros.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './components/seguridad/registrar/registrar.component';
import { LoginComponent } from './components/seguridad/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarraComponent } from './components/navegacion/barra/barra.component';
import { MenuListaComponent } from './components/navegacion/menu-lista/menu-lista.component';
import { SeguridadService } from './services/seguridad.service';
import { BooksComponent } from './components/books/books.component';
import { BooksService } from './services/books.service';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AutoresComponent } from './components/autores/autores.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
    RegistrarComponent,
    LoginComponent,
    BarraComponent,
    MenuListaComponent,
    BooksComponent,
    AddBookComponent,
    AutoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    LibrosService,
    SeguridadService,
    BooksService,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-ES'
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddBookComponent]
})
export class AppModule { }
