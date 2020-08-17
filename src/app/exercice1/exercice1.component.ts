import { Component, OnInit, Input } from '@angular/core';
import { Exercice1EnfantComponent } from './exercice1-enfant/exercice1-enfant.component';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0; 
  public result: number = 0;

  nouvResult(event) {
    this.result = event.value;
    console.log("affiche Resultat : " + this.result);
  }

  constructor() { }

  ngOnInit() {
    
  }
}