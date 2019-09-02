import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPage } from './filtro.page';

describe('FiltroPage', () => {
  let component: FiltroPage;
  let fixture: ComponentFixture<FiltroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
