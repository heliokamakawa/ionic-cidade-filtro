import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarPage } from './salvar.page';

describe('SalvarPage', () => {
  let component: SalvarPage;
  let fixture: ComponentFixture<SalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
