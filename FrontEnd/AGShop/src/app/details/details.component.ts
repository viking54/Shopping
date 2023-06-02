import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayPageComponent } from '../display-page/display-page.component';
import { Pincode } from '../pincode';
import { Product } from '../product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
value: any;
  rating3: number;
  form: FormGroup<{ rating: FormControl<any>; }>;
  rate: number;
 
 
hov(arg0: any) {
throw new Error('Method not implemented.');
}
 proData:any;
 pinData:any;
 rat:string;
 checkData:any;
 message=0;
 message1=0;
  constructor(private pro:ShopService,private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }
 pincode = new Pincode();

 
  ngOnInit(): void {
    this.rating3 = 0;
    this.form = this.fb.group(
      {
      rating: ['', Validators.required],
     
    
    },
   
    
    )


    
    this.pro.getById(this.route.snapshot.params['id']).subscribe((result)=>{
       
      this.proData=result;
      });
      
      

  }


  checkAvl()
  {
    this.pro.checkavl(this.pincode.pin).subscribe(
     data =>
      { 
         
          this.checkData=data
          console.log(this.checkData)
         if(this.checkData[0].Message!="No records found")
         {
          this.pinData=(data[0].PostOffice[0].Name);
          this.message=1
         }
         else
         {
          this.message=2
         }
          
        
          
   }
  
    )
    setTimeout(()=>
    {
     
      this.message=0;
      
       
    },3000);
    
}


Back()
{

  this.router.navigate(['/display'])
}


submitrating()
{
 
 
   
  this.pro.addReview(this.proData.code,this.form.value.rating).subscribe(
    data=>
    { 
      window.location.reload();
    
    
  },
  error =>
  { 

    console.log("exception occured");
    
  }
  )
}

}