import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2ConexionHtmlTsComponent } from './comp2-conexion-html-ts.component';

describe('Comp2ConexionHtmlTsComponent', () => {
  let component: Comp2ConexionHtmlTsComponent;
  let fixture: ComponentFixture<Comp2ConexionHtmlTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp2ConexionHtmlTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp2ConexionHtmlTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
