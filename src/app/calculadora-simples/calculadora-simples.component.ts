import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-simples',
  templateUrl: './calculadora-simples.component.html',
  styleUrls: ['./calculadora-simples.component.css']
})
export class CalculadoraSimplesComponent {
  value1: number = 0;
  value2: number = 0;
  probability: number = 0;
  percentage = 0;

  calculateProbability(): void {
    if (this.value2 !== 0) {
      this.probability = this.value1 / this.value2;
      this.percentage = this.probability * 100;
    } else {
      this.probability = 0;
    }
  }
}
