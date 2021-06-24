import { Injectable, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesComponent } from './components/utilidades/utilidades.component';
import { NavComponent } from './components/nav/nav.component';
import {AuthModule} from './auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AsideComponent } from './components/aside/aside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbTabsetModule, NbCardModule, NbSidebarModule, NbMenuItem, NbMenuModule, NbListModule, NbIconModule, NbActionsModule, NbButtonGroupModule, NbProgressBarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './pages/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';
import { HammerModule  } from '@angular/platform-browser';
import { DatosComponent } from './pages/datos/datos.component';
import { FormacionComponent } from './pages/formacion/formacion.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilidadesComponent,
    NavComponent,
    AsideComponent,
    HomeComponent,
    TecnologiasComponent,
    DatosComponent,
    FormacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbActionsModule,
    AuthModule,
    NbButtonGroupModule,
    NgbModule,
    NbTabsetModule,
    NbCardModule,
    NbListModule,
    NbLayoutModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HammerModule,NbProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
