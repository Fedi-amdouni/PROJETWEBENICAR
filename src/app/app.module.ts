import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MesVentesComponent } from './mes-ventes/mes-ventes.component';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { NgToastModule } from 'ng-angular-popup'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SideBarComponent,
    HomeComponent,
    GestionProduitsComponent,
    AjoutProduitComponent,
    MesVentesComponent,
    MonPanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,ReactiveFormsModule,NgToastModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
