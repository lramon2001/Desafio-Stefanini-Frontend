import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { StefamonComponent } from './modules/stefamon/stefamon.component';
import { BatalhaComponent } from './modules/batalha/batalha.component';

@NgModule({
  declarations: [
    AppComponent,
    StefamonComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    BatalhaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CardModule,
    ButtonModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
