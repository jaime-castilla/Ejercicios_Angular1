import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentosTypeScriptComponent } from './fundamentos-type-script/fundamentos-type-script.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentosTypeScriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
