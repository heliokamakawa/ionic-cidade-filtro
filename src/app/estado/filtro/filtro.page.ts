import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { Estado } from '../entidade/estado';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.page.html',
  styleUrls: ['./filtro.page.scss'],
})
export class FiltroPage implements OnInit {
  listaEstado: Observable<Estado[]>;
  estado: any;
  filtroEstado: Estado[];

  /// atributs para o filtro
  nome: string;
  status: string;
  sigla: string;
  filtro = {}/// regras ativas do filtro

  constructor(private fire: AngularFireDatabase) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }

  ngOnInit() {
    this.listaEstado.subscribe(estado => {
        this.estado = estado;
        this.aplicarFiltro();
    })
  }

  private aplicarFiltro() {
    this.filtroEstado = _.filter(this.estado, _.conforms(this.filtro) )
  }

  // definindo o filtro
  filtrar(atributo: string, valor: any) {
    this.filtro[atributo] = val => val == valor;
    this.aplicarFiltro();
  }

  filtroStatus(atributo: string, valor: boolean) {
    if (!valor) this.removeFilter(atributo)
    else {
      this.filtro[atributo] = val => val
      this.aplicarFiltro()
    }
  }

  // remover filtro
  removeFilter(atributo: string) {
    delete this.filtro[atributo]
    this[atributo] = null
    this.aplicarFiltro()
  }
}
