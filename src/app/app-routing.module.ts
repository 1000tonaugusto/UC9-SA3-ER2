import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { CompraItemComponent } from './views/compra-item/compra-item.component';
import { LojasComponent } from './views/lojas/lojas.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contato", component: ContatoComponent},
  { path: "empresa", component: EmpresaComponent},
  { path: "compraitem", component: CompraItemComponent},
  { path: "lojas", component: LojasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
