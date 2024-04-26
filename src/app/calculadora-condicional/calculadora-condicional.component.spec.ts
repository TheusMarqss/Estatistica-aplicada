import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCondicionalComponent } from './calculadora-condicional.component';

describe('CalculadoraCondicionalComponent', () => {
  let component: CalculadoraCondicionalComponent;
  let fixture: ComponentFixture<CalculadoraCondicionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraCondicionalComponent]
    });
    fixture = TestBed.createComponent(CalculadoraCondicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
