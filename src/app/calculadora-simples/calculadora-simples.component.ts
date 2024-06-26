import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculadora-simples',
  templateUrl: './calculadora-simples.component.html',
  styleUrls: ['./calculadora-simples.component.css']
})
export class CalculadoraSimplesComponent implements OnInit{
  value1: number = 0;
  value2: number = 0;
  probability: number = 0;
  percentage: number = 0;
  result: string = '';
  errorMessage: string = '';

  resultsHistory: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadResults();
  }

  loadResults(): void {
    this.fetchResults().subscribe(data => {
      this.resultsHistory = data.results;
    });
  }

  calculateProbability(): void {
    this.loadResults();
    if (this.value1 > this.value2) {
      this.errorMessage = 'O número de resultados favoráveis não pode ser maior que o número de espaços possíveis.';
      return;
    }

    if (this.value1 < 0 || this.value2 < 0) {
      this.errorMessage = 'Os números não podem ser negativos';
      return;
    }

    this.errorMessage = '';
    if (this.value2 !== 0) {
      this.probability = this.value1 / this.value2;
      this.percentage = this.probability * 100;
      this.result = this.probability.toFixed(2) + ' ou ' + this.percentage.toFixed(2) + '%';
      this.saveResults(this.value1, this.value2, this.result);
    } else {
      this.probability = 0;
    }
  }

  saveResults(value1: number, value2: number, result: string): void {
    this.http.post('/api/simpleInsert', { value1, value2, result }).subscribe(response => {
      console.log(response);
    });
  }

  fetchResults(): Observable<any> {
    return this.http.get('/api/simpleGet');
  }

  clean() {
    this.errorMessage = '';
    this.loadResults();
    this.value1 = 0;
    this.value2 = 0;
    this.probability = 0;
  }
}
