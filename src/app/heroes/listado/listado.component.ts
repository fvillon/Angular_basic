import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Hulk', 'Wolvering', 'Ironman', 'Antman'];
  heroesBorrados = "";

  constructor() { }

  BorrarHeroes(){
    this.heroesBorrados = this.heroes.shift() || "" ;
  }

  }


