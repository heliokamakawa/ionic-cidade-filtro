import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  acao: string;

  constructor(private rotas : Router) {}

  acessar() : void {
    this.rotas.navigate([this.acao]);
  }

}
