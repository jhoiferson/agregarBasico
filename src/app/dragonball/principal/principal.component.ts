import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    //inyeccion de dependencias 
    //private dragonballService: DragonballService
  ) { }

  ngOnInit(): void {
  }
 
 
 
  nuevo:Personaje= {
    nombre: 'maestro roshi',
    poder: 1000
  } 

  


}
