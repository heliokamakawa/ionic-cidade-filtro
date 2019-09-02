import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPage } from './listar.page';

describe('ListarPage', () => {
  let component: ListarPage;
  let fixture: ComponentFixture<ListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
