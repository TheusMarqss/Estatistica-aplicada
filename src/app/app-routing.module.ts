import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraSimplesComponent } from './calculadora-simples/calculadora-simples.component';

const routes: Routes = [
  { path: '', component: CalculadoraSimplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
