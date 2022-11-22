import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';


  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styles: [
		`
			:host .alert-custom {
				color: #99004d;
				background-color: #f169b4;
				border-color: #800040;
			}
		`,
	],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  

  constructor(
    private formBuilder: FormBuilder,private router:Router,
  ) { 
   
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      EMAIL:  ['',[Validators.required]],
      PASSWORD: ['',Validators.required],
  })}

  onsubmit(){
    let t=0;
    let data=JSON.parse(localStorage.getItem('user') || "null");
    for(let i=0;i<data.length;i++){
      if ((data[i].EMAIL===this.loginForm.value.EMAIL)&&(data[i].PASSWORD===this.loginForm.value.PASSWORD)){
        t=1;
      }

    }
    if (t==1){
      console.log(t);
      this.router.navigate(['../'])
      
    }
    else{
      alert("Cordonnées fauuses ! Prière de vérifier ")
    }
    let a=JSON.parse(localStorage.getItem('login') || '{}');
    console.log(this.loginForm.value);
   
    

    a.push(this.loginForm.value);
    localStorage.removeItem('login');
    localStorage.setItem('login',JSON.stringify(a));

  }

}
