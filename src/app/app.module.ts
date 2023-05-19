import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentosTypeScriptComponent } from './comp1-fundamentos-type-script/fundamentos-type-script.component';
import { Comp2ConexionHtmlTsComponent } from './comp2-conexion-html-ts/comp2-conexion-html-ts.component';
import { Comp3Conexion2HtmlTsComponent } from './comp3-conexion2-html-ts/comp3-conexion2-html-ts.component';
import { FormsModule } from '@angular/forms';
import { Comp4Formulario1Component } from './comp4-formulario1/comp4-formulario1.component';
import { Comp5Formulario2Component } from './comp5-formulario2/comp5-formulario2.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentosTypeScriptComponent,
    Comp2ConexionHtmlTsComponent,
    Comp3Conexion2HtmlTsComponent,
    Comp4Formulario1Component,
    Comp5Formulario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
