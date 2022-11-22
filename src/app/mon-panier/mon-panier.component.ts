import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {
  LADATA=JSON.parse(localStorage.getItem("monPanier") || 'null');
  displayedColumns: string[] = ['Nom','Numéro','Catégorie','Fournisseur','Description','PrixHT','TVA','PrixTTC','Etat','EMAIL','delete'];

  constructor() { }

  ngOnInit(): void {
    


    
  }
  supprimer(data:any){
    
    let items=JSON.parse(localStorage.getItem('monPanier')|| "null");
    for (let i=0;i<items.length;i++){
      if (items[i].NUMERO===data.NUMERO){
        items.splice(i,1);
      }
    }
    localStorage.setItem('monPanier',JSON.stringify(items));
    location.reload();
    
  }

  commander(){
    let data=JSON.parse(localStorage.getItem('monPanier') || "null");
    let somme=0;
    for (let p=0;p<data.length;p++){
      somme=somme+data[p].PRIXTTC;
    }
    console.log(somme);
  window.alert('Vous avez passé vos commandes qui arriveront trés prochainement. Le montant à payer est '+ somme);
  localStorage.removeItem('monPanier');
  localStorage.setItem('monPanier',JSON.stringify([]));
  location.reload();
  

  }


  
}
