import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './views/contato/contato.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { LojasComponent } from './views/lojas/lojas.component';
import { HomeComponent } from './views/home/home.component';
import { CompraItemComponent } from './views/compra-item/compra-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    EmpresaComponent,
    LojasComponent,
    HomeComponent,
    CompraItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
