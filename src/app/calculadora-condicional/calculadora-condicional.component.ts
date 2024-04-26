import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculadora-condicional',
  templateUrl: './calculadora-condicional.component.html',
  styleUrls: ['./calculadora-condicional.component.css']
})
export class CalculadoraCondicionalComponent implements OnInit{
  value1: number = 0;
  value2: number = 0;
  value3: number = 0;
  value4: number = 0;

  resultsHistory: any[] = [];

  probabilityA: number = 0;
  probabilityB: number = 0;
  P_A_and_B: number = 0;
  conditionalProbability: number = 0;
  errorMessage: string = '';
  result: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadResults();
  }

  loadResults(): void {
    this.fetchResults().subscribe(data => {
      this.resultsHistory = data.results;
    });
  }


  calculateIntersectionProbability(): void {
    this.P_A_and_B = (this.value1 / this.value2) * (this.value3 / this.value4);
  }

  calculateProbability(): void {
    this.loadResults();
    if (this.value1 > this.value2 || this.value3 > this.value4) {
      this.errorMessage = 'O número de resultados favoráveis não pode ser maior que o número de espaços possíveis.';
      return;
    }

    if (this.value2 !== 0) {
      this.probabilityA = this.value1 / this.value2;
    } else {
      this.probabilityA = 0;
    }

    if (this.value4 !== 0) {
      this.probabilityB = this.value3 / this.value4;
    } else {
      this.probabilityB = 0;
    }
    this.errorMessage = '';
    this.calculateConditionalProbability()
  }

  calculateConditionalProbability(): void {
    this.calculateIntersectionProbability();
    
    if (this.probabilityB !== 0) {
      this.conditionalProbability = this.P_A_and_B / this.probabilityB;
    } else {
      this.conditionalProbability = 0;
    }
    this.result = this.conditionalProbability.toFixed(2) + ' ou ' + (this.conditionalProbability * 100).toFixed(2) + '%'
    this.saveResults(this.value1, this.value2, this.value3, this.value4, this.result);
  }

  clean() {
    this.loadResults();
    this.value1 = 0;
    this.value2 = 0;
    this.value3 = 0;
    this.value4 = 0;
    this.conditionalProbability = 0;
    this.errorMessage = '';
  }

  saveResults(value1: number, value2: number, value3: number, value4: number, result: string): void {
    this.http.post('/api/conditionalInsert', { value1, value2, value3, value4, result }).subscribe(response => {
      console.log(response);
    });
  }

  fetchResults(): Observable<any> {
    return this.http.get('/api/conditionalGet');
  }
}
