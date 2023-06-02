import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css']
})
export class LoginAndRegisterComponent implements OnInit {
user = new User();
user2 = new User();
message=0;
message1=0;
  constructor(private _service : ShopService , private route : Router) { }

  ngOnInit(): void {
  }


  loginUser()
  {
   
    this._service.LoginUserFromRemote(this.user).subscribe(
      data =>
      { console.log("response received");
        
      if(data.emailId=="admin@gmail.com" && data.password=="admin")
      {
       this.route.navigate(['/adminpanel'])
      }
      else
      {
       sessionStorage.setItem('loggedUser', data.userName);
        
        this.route.navigate(['/display'])
      }
      },
      error =>
      { 

        console.log("exception occured");
        this.message=1;
        setTimeout(()=>
{
 
  this.message=0;
  
   
},3000);

    }
  
      
    )

  
  }

  registerUser()
  {
    this._service.registerUserFromRemote(this.user2).subscribe(
      data => 
      { console.log("response received");
      
        this.message1=1;
      },
      error =>
      { 

        console.log("exception occured");
        this.message1=2;
      }

    )
    setTimeout(()=>
    {
     
      this.message1=0;
      
       
    },3000);
    
        }
          
  }

