import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //metodo para agregar personaje 
  agregar(){
    if(this.nuevo.nombre.trim().length===0){//SI EL NOMBRE ES 0 RETURN
      return;
    }
    this.dragonballService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

  constructor(
    private dragonballService: DragonballService
  ) { }

  ngOnInit(): void {
  }

  @Input() nuevo:Personaje={
    nombre:'',
    poder:0
  }
 
}
