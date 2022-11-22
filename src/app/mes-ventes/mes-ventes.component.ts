import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';



@Component({
  selector: 'app-mes-ventes',
  templateUrl: './mes-ventes.component.html',
  styleUrls: ['./mes-ventes.component.css']
})
export class MesVentesComponent implements OnInit {
   updateForm!:FormGroup
  
  displayedColumns: string[] = ['Nom','Numéro','Catégorie','Fournisseur','Description','PrixHT','TVA','PrixTTC','Etat','modifier','delete'];

  LADATA=JSON.parse(localStorage.getItem("produit") || 'null');
  mesVentes:any=[];
 
  
  
 

 
  constructor(
    public formBuilder:FormBuilder,private router:Router
  ) {
    let i=0;
    var data=localStorage.getItem('produit');
    var dataLogin=JSON.parse(localStorage.getItem('login')||"null");
    
    let moi=dataLogin.pop();
    console.log(this.LADATA[2])
    for(let j=0;j<this.LADATA.length;j++){
      if(this.LADATA){
      if (this.LADATA[j].EMAIL==moi.EMAIL){
        console.log(this.LADATA[j]);
        this.mesVentes.push(this.LADATA[j])

      }}

    }
    
    

    

  }
   
   

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      NOM:  ['',[Validators.required]],
      NUMERO: ['',Validators.required],
      CATEGORIE: ['',Validators.required],
      FORUNISSEUR: ['',Validators.required],
      DESCRIPTION: ['',Validators.required],
      PRIXHT: ['',Validators.required],
      TVA: ['',Validators.required],
      PRIXTTC:  ['',Validators.required],
      
      ETAT:  ['',Validators.required],
      EMAIL:['',Validators.required]
    })

    
    console.log(this.mesVentes)
    
     
    let a="a";
    console.log(this.LADATA);
   
  
   
    
    

  }
  getData(){

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
    location.reload();
    
  }
  openForm() {
    document.getElementById("updateForm")!.style.display = "block";
  }
   closeForm() {
    document.getElementById("updateForm")!.style.display = "none";
    location.reload();
  }
  onSubmit(NUM:any){
    let data=JSON.parse(localStorage.getItem('produit') || "null");
    for (let j=0;j<data.length;j++){
      if (data[j].NUMERO==NUM){
        data[j]=this.updateForm.value;
        
        localStorage.removeItem('produit');
        localStorage.setItem('produit',JSON.stringify(data));

      }

    }
    location.reload();

  }

 
  

}

