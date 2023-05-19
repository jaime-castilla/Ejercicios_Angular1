import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp5Formulario2Component } from './comp5-formulario2.component';

describe('Comp5Formulario2Component', () => {
  let component: Comp5Formulario2Component;
  let fixture: ComponentFixture<Comp5Formulario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp5Formulario2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp5Formulario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
