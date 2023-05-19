import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4Formulario1Component } from './comp4-formulario1.component';

describe('Comp4Formulario1Component', () => {
  let component: Comp4Formulario1Component;
  let fixture: ComponentFixture<Comp4Formulario1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp4Formulario1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp4Formulario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
