import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Estado } from '../entidade/estado';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
  estado: Estado = new Estado();

  constructor(private fire:AngularFireDatabase, private rota:Router) { }

  ngOnInit() {
  }

  salvar(){
    this.fire.list('estado').push(this.estado);
    this.estado = new Estado();
    this.rota.navigate(['estado-listar']);
  }

}
