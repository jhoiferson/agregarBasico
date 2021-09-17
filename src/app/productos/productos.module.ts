import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPrincipalComponent } from './main-principal/main-principal.component';
import { MainPageComponent } from '../dbz/main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPrincipalComponent
  ],
  exports:[
    MainPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductosModule { }
