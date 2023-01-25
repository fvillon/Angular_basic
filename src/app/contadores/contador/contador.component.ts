import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent{

  numero: number = 10;
  valor:number= 0;
  base:number = 5;

  constructor() { }

  acumulador(valor:number){
    this.numero += valor;
  }

}
