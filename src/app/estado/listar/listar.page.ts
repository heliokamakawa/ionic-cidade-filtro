import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Estado } from '../entidade/estado';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  listaEstado: Observable<Estado[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }

  ngOnInit() {
  }

}
