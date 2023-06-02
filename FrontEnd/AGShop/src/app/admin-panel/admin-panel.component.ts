import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  product = new Product();
  message=0;
  constructor(private _service : ShopService , private route : Router) { }

  ngOnInit(): void {
  }



  Saveproduct()
  {
    this._service.addProFromRemote(this.product).subscribe(
      data => 
      { console.log("response received");
      
        this.message=1;
      },
      error =>
      { 

        console.log("exception occured");
        this.message=2;
      }

    )
    setTimeout(()=>
    {
     
      this.message=0;
      
       
    },3000);
    
        }
  
        Logout()
        {
          this.route.navigate(['/']);
        }
}
