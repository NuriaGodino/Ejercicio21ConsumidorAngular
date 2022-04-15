import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from '../entidades/Videojuego';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  usuario:string = ''
  pass:string = ''
  videojuegos:Videojuego[] = [(new Videojuego("Horizon Forbidden West", "Guerrilla Games", 4.2, "../assets/Horizon.png")),
  (new Videojuego("Spider-Man", "Insomniac Games", 4.9, "../assets/spiderman.png")),
  (new Videojuego("The Last of Us Part II", "Naughty Dog", 3.7, "../assets/Ellie.png")),
  (new Videojuego("Uncharted 4: El desenlace del ladrón", "Naughty Dog", 4.8, "../assets/uncharted.png")),
  (new Videojuego("Hogwarts Legacy", "Avalanche Software", 5, "../assets/hw.png"))]

  constructor(private router:Router ,route:ActivatedRoute) {
    this.usuario = route.snapshot.params["usuario"]  
    this.pass = route.snapshot.params["pass"] 
  }

  public detalle(juego:Videojuego){
    this.router.navigate(['/detalle', juego.id, juego.titulo, juego.compania, juego.icon, juego.valMedia, this.usuario, this.pass])
  }

  ngOnInit() {
  }

}
