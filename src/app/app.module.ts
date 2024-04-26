import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraSimplesComponent } from './calculadora-simples/calculadora-simples.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalculadoraCondicionalComponent } from './calculadora-condicional/calculadora-condicional.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraSimplesComponent,
    CalculadoraCondicionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
