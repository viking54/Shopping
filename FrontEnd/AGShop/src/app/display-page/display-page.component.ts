import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Price } from '../price';
import {Product} from '../product'
import { ShopService } from '../shop.service';
import { User } from '../user';
@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
user = new User();
price= new Price();
  prodData:any;
 proData:any=[];
  userDisplayName: string;
  productList! : any;
  rew=0;
  semsg=0;
 constructor(private _service : ShopService , private route : Router) { }

  ngOnInit(): void {
   
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this._service.getAllproduct().subscribe((allData)=>{
   console.log(allData);
  
   this.proData = allData;
   
   
    });
  
 
  
  }
  getProductListBySearchs(searchValue:any){
    
 this.rew=1;
    this.proData =[];
    this._service.getProductListBySearch(searchValue.search).subscribe((data: Product) => {
      this.proData= data;
      console.log(this.proData);
      if(this.proData.length==0)
      {
        this.semsg=1;
      }
      setTimeout(()=>
    {
     
      this.semsg=0;
      
       
    },3000);
    
    },
     (error: any) => {
      console.log("not")
    })
  }
  Logout()
  {
    this.route.navigate(['/']);
  }
  pricerange()
  {
    this._service.getbyprice(this.price.min,this.price.max).subscribe((priceData)=>{
    
     
      this.proData = priceData;
      
      
       });
     
  }

 
}
