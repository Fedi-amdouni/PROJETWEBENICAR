import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component"
import{RegisterComponent} from "./register/register.component"
import{HomeComponent} from "./home/home.component"
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { MesVentesComponent } from './mes-ventes/mes-ventes.component';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
const routes: Routes = [
  
  {path: "",component : HomeComponent,children:[
    {path:"Produits",component:GestionProduitsComponent},
    {path:"ajoutProduit",component:AjoutProduitComponent},
    {path:"mesProduits",component:MesVentesComponent},
    {path:"monPanier",component:MonPanierComponent} 
 
  ]
    
  },
  {path: "login",component : LoginComponent},
  {path:"Register",component:RegisterComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
