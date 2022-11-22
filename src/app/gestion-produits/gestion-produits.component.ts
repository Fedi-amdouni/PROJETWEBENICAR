import { Component, OnInit, ɵfindLocaleData } from '@angular/core';

import { SharkDirective } from '../shark.directive';

export interface produits {
  Nom: string;
  Numéro: number;
  Catégorie: string;
  Fournisseur: string;
  Description: string;
  PrixHT:number;
  TVA:number;
  PrixTTC:number
}


@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

  displayedColumns: string[] = ['Nom','Numéro','Catégorie','Fournisseur','Description','PrixHT','TVA','PrixTTC','Etat','EMAIL','commander','modifier','delete'];

  LADATA=JSON.parse(localStorage.getItem("produit") || 'null');
 
  constructor() {
    let i=0;
    var data=localStorage.getItem('produit');
    let a:any=[];
   

  }
   
   

  ngOnInit(): void {
    this.getData(this.LADATA[0].NOM);
   
    
    console.log(this.LADATA);
   
  
   
    
    

  }
  getData(entree:any){
    

   

    
  }

  

  modifier(data:any){
    let items=JSON.parse(localStorage.getItem('produit')|| "null")

items.forEach(function (item:any,index:any){
if(data.NUMERO==item.NUMERO){
  items.splice(index,1,data);
}
});
localStorage.setItem('produit',JSON.stringify(items));


  }
  supprimer(data:any){
    
    let items=JSON.parse(localStorage.getItem('produit')|| "null");
    for (let i=0;i<items.length;i++){
      if (items[i].NUMERO===data.NUMERO){
        items.splice(i,1);
      }
    }
    localStorage.setItem('produit',JSON.stringify(items));
    
  }
  commander(data:any){
    
    let a=JSON.parse(localStorage.getItem('monPanier') || "null");
    let LADATA=JSON.parse(localStorage.getItem("produit") || 'null');
    for(let k=0;k<LADATA.length;k++){
      if (LADATA[k].NUMERO===data.NUMERO){
        a.push(LADATA[k]);
        localStorage.removeItem('monPanier');
        localStorage.setItem('monPanier',JSON.stringify(a));
      }
    }
    alert("Votre commande a été ajouté à votre panier")

  }


  

}

