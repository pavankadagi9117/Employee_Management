import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../userData';
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupform:FormGroup;
  data:User | null=null;
  // name:string ='';
  // email:string ='';
  // mobile:number | null = null;
  // password:string ='';
 
  constructor(private router:Router, private apiService:ApiService, private formBuilder:FormBuilder){
    
    this.signupform =  this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      mobile:['',Validators.required],
      password:['',Validators.required],
      repeatpassword:['',Validators.required]
    })
  }

//  data:User | null = null;
   localURL = 'http://192.168.29.78:8000';
  ngOnInit(){
  }


  sendData(){
    this.apiService.postData(this.localURL,this.data).subscribe(res=>console.log(res))
  }

  register(form: FormGroup) {
    let name = form.get('name')?.value;
    let email = form.get('email')?.value;
    let password = form.get('password')?.value;
    let mobile = form.get('mobile')?.value;
    let repeatpassword = form.get('repeatpassword')?.value;
    
    if (password === repeatpassword) {
      this.data = { name, email, mobile, password };
      this.sendData(); 
    } else {
      alert("Please enter the same password in repeatpassword");
    }
    
    console.log(form);
  }
  

  redirectToHome(){
    this.router.navigate(['/']);
  }
}
