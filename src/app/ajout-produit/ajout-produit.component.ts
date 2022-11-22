import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  ajoutProduitForm!: FormGroup;
 

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,

    
  ) {
  }
  

  ngOnInit(): void {
    
    this.ajoutProduitForm = this.formBuilder.group({
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
  
    }
    onsubmit(){
      console.log(this.ajoutProduitForm.value);
      let a= JSON.parse(localStorage.getItem('produit') || '{}');
      console.log(a);

      a.push(this.ajoutProduitForm.value);
      localStorage.removeItem('produit');
      localStorage.setItem('produit',JSON.stringify(a));

      
      
      
      console.log(a);
      this.router.navigate(['../'])
    }
    getData(){
      var a= localStorage.getItem('produit') || '{}';
      
      alert(a);
    }
   
  


}
