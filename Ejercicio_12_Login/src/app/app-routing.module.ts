import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '', //Inicial
    component: LoginComponent
  },
  {
    path: 'bienvenida/:usuario/:pass', //Nos vamos a la web de bienvenida
    component: BienvenidaComponent
  },
  {
    path: 'detalle/:id/:titulo/:compania/:icon/:valMedia/:user/:pass', //detalle de juegos
    component:DetalleComponent
  },
  {
    path: 'about', //Sobre mi
    component:AboutComponent
  },
  {
    path: 'contacto', //Contactame
    component:ContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
