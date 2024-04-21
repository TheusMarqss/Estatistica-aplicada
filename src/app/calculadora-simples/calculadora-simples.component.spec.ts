import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraSimplesComponent } from './calculadora-simples.component';

describe('CalculadoraSimplesComponent', () => {
  let component: CalculadoraSimplesComponent;
  let fixture: ComponentFixture<CalculadoraSimplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraSimplesComponent]
    });
    fixture = TestBed.createComponent(CalculadoraSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
