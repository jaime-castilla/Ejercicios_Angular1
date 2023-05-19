import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3Conexion2HtmlTsComponent } from './comp3-conexion2-html-ts.component';

describe('Comp3Conexion2HtmlTsComponent', () => {
  let component: Comp3Conexion2HtmlTsComponent;
  let fixture: ComponentFixture<Comp3Conexion2HtmlTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp3Conexion2HtmlTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp3Conexion2HtmlTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
