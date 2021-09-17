import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(
    private dragonballService: DragonballService
  ) { }

  ngOnInit(): void {
  }
 
  // @Input() personajes:Personaje[]=[]  // el imput indica que recibira una propiedad del padre 
  get personajes(){
    return this.dragonballService.personajes;
  }
}
