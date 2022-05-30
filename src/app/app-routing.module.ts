import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/incio.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LoginComponent } from './components/seguridad/login/login.component';
import { RegistrarComponent } from './components/seguridad/registrar/registrar.component';
import { SeguridadGuard } from './guard/seguridad.guard';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [SeguridadGuard]},
  { path: 'libros', component: LibrosComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SeguridadGuard]
})
export class AppRoutingModule { }
