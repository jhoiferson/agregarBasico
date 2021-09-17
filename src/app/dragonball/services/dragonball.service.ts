import { Injectable } from '@angular/core';
import { Personaje } from '../../dbz/interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor() { }

   //ARREGLO PERSONAJES
   private _personajes: Personaje[]=[
    {
      nombre:'goku',
      poder:9000
    },
    {
      nombre:"vegeta",
      poder:8000
    }
  ];

  get personajes(): Personaje[]{
    return [...this._personajes]
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }
}
