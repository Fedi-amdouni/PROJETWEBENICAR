import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  


  constructor(
    private formBuilder: FormBuilder,private router:Router
  ) {
    
    
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      NOM:  ['',[Validators.required]],
      PRENOM: ['',Validators.required],
      EMAIL: ['',Validators.required],
      PASSWORD: ['',Validators.required],
      PAYS: ['',Validators.required],
      VILLE: ['',Validators.required],
      ADRESSE: ['',Validators.required],
      NUMTEL:  ['',Validators.required]
    })
  }
  onsubmit(){
    let a=JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.registerForm.value);
   
    

    a.push(this.registerForm.value);
    localStorage.removeItem('user');
    localStorage.setItem('user',JSON.stringify(a));
    console.log(a);
    this.router.navigate(['..//login'])





  }

}
