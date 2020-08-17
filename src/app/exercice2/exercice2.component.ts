import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('valInput', {static: true}) public maValeur: ElementRef;

  public valeur: string;

  afficheValInput() {
    this.valeur = this.maValeur.nativeElement.value;
    console.log("ma valeur : " + this.maValeur.nativeElement.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
