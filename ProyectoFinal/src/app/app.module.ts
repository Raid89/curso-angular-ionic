import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPagesComponent } from './components/pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './components/pages/register-pages/register-pages.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulo personalizado que exporta componentes de tipo lista
import { ListModule } from './modules/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavBarComponent,
    HomePageComponent,
    LoginPagesComponent,
    RegisterPagesComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Importamos modulos personalizados
    ListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
