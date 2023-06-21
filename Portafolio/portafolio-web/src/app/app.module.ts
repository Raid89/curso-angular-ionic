import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULOS PERSONALIZADOS
import { AngularMaterialModule } from './modules/material/material.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ButtonComponent } from './components/personalized-components/button/button.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SkeletonComponent } from './components/layout/skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ButtonComponent,

    //Plantilla inicial
    NavigationComponent,
    FooterComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
