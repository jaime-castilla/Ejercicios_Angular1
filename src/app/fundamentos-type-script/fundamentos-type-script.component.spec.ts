import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentosTypeScriptComponent } from './fundamentos-type-script.component';

describe('FundamentosTypeScriptComponent', () => {
  let component: FundamentosTypeScriptComponent;
  let fixture: ComponentFixture<FundamentosTypeScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundamentosTypeScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundamentosTypeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
