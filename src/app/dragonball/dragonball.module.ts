import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DragonballService } from './services/dragonball.service';



@NgModule({
  declarations: [
    PrincipalComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DragonballService
  ]
})
export class DragonballModule { }
