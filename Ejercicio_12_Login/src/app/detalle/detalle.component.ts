import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../entidades/Usuario';
import { Videojuego } from '../entidades/Videojuego';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  titulo:string = ""
  id:number = 0
  compania:string = ""
  valMedia:number = 0
  icon:string = ""

  usuario:string = ""
  pass: string = ""
  constructor(private router:Router ,route:ActivatedRoute) {
    this.usuario = route.snapshot.params['user']
    this.pass = route.snapshot.params['pass']
    this.id = route.snapshot.params["id"]
    this.titulo = route.snapshot.params["titulo"]
    this.compania = route.snapshot.params["compania"]
    this.icon = route.snapshot.params["icon"]
    this.valMedia = route.snapshot.params["valMedia"]
  }

  ngOnInit() {
  }

}
