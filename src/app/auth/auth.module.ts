import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {environment} from '../../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule, [NgbPaginationModule, NgbAlertModule],AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule],

  exports: [LoginComponent],
})
export class AuthModule {}
