import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './pages/datos/datos.component';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { HomeComponent } from './pages/home/home.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';

const routes: Routes = [
  {path:'',component:HomeComponent,},
  {path:'tecnologias',component:TecnologiasComponent,},
  {path:'datos',component:DatosComponent,},
  {path:'formacion',component:FormacionComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
