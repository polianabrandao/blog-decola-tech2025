import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { DicasViagensComponent } from './pages/dicas-viagens/dicas-viagens.component';
import { GaleriaFotosComponent } from './pages/galeria-fotos/galeria-fotos.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    path:'dicas-viagens',
    component:DicasViagensComponent
  },
  {
    path:'galeria-fotos',
    component:GaleriaFotosComponent
  },
  {
    path:'sobre',
    component:SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
