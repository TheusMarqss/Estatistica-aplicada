import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculadora-simples',
  templateUrl: './calculadora-simples.component.html',
  styleUrls: ['./calculadora-simples.component.css']
})
export class CalculadoraSimplesComponent {
  value1: number = 0;
  value2: number = 0;
  probability: number = 0;
  percentage: number = 0;
  result: string = '';

  constructor(private http: HttpClient) { }

  calculateProbability(): void {
    if (this.value2 !== 0) {
      this.probability = this.value1 / this.value2;
      this.percentage = this.probability * 100;
      this.result = this.probability.toFixed(2) + ' ' + this.percentage.toFixed(2);
      this.saveResults(this.value1, this.value2, this.result);
    } else {
      this.probability = 0;
    }
  }

  saveResults(value1: number, value2: number, result: string): void {
    this.http.post('/teste', { value1, value2, result }).subscribe(response => {
      console.log(response);
    });
  }
}
