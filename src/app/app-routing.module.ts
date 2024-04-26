import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraSimplesComponent } from './calculadora-simples/calculadora-simples.component';
import { CalculadoraCondicionalComponent } from './calculadora-condicional/calculadora-condicional.component';

const routes: Routes = [
  { path: '', component: CalculadoraSimplesComponent },
  { path: 'calculadora-condicional', component: CalculadoraCondicionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
