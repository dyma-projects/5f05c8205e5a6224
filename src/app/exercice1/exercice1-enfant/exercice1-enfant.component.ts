import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input('valCompteur') compteur: number; 
  @Output() afficheResult = new EventEmitter();

  incrementer() {
    this.compteur++;
    this.afficheResult.emit({
      value: this.compteur
    });
    console.log("valeur compteur : " + this.compteur);
  }

  decrementer() {
    this.compteur--;
    this.afficheResult.emit({
      value: this.compteur
    });
    console.log("valeur compteur : " + this.compteur);
  }

  constructor() { }

  ngOnInit() {

  }

}
