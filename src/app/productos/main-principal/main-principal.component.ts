import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-principal',
  templateUrl: './main-principal.component.html',
  styleUrls: ['./main-principal.component.css']
})
export class MainPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agregar(){
    console.log('ESTO ES UNA PRUEBA Y SE DEBE DE VER EN CONSOLA');
  }

}
