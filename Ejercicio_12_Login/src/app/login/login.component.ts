import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entidades/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios:Usuario[] =[]

  usuario:string = ''
  pass:string = ''

  usuarioNoExiste = "El usuario no existe"
  passIncorrecta = "La contraseña es incorrecta"
  errorUser = true
  errorPass = true

  constructor(private route:Router) {
    this.usuarios.push(new Usuario("Nuria", "nuria"))  
    this.usuarios.push(new Usuario("Felix", "felix"))
    this.usuarios.push(new Usuario("Cristina", "cristina"))
    this.usuarios.push(new Usuario("Peter", "peter"))
  }

  /**
   * @author Nuria Godino
   * El metodo realiza el login, validando los datos introducidos por el cliente.
   * En caso de que el cliente no introduzca los datos correctamente veremos un mensaje de error indicando el dato introducido de forma incorrecta
   */

  public login(){
    var usuarioExiste:boolean = false
    for(var i = 0; i < this.usuarios.length; i++){ //Recorremos la lista de usuarios
      if(this.usuario == this.usuarios[i].user){
        usuarioExiste = true
        if(this.pass == this.usuarios[i].pass){
          this.route.navigate(['/bienvenida', this.usuario, this.pass])
        }
      }
    }
    //Coprobamos los errores de usuario y contraseña 
    if(usuarioExiste == false){
      this.errorUser = false
    }
    if(usuarioExiste == true){
      this.errorPass = false
    }
  } 

  ngOnInit() {
  }

}
