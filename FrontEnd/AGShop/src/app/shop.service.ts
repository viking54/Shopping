import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user'
import {HttpClient} from '@angular/common/http'
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http : HttpClient) { }

  public LoginUserFromRemote(user :User):Observable<any>
  {
      return this.http.post<any>("http://localhost:8080/login",user)
      
      
  }
  public registerUserFromRemote(user :User):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/registeruser",user)
  }
  getAllproduct():Observable<Product[]>
  {
    return this.http.get<Product[]>("http://localhost:8080/products");
  }
  
  getById(id:number){
    return this.http.get(`${"http://localhost:8080/products"}/${id}`);
  }
  checkavl(id:number)
  {
    return this.http.get(`${"https://api.postalpincode.in/pincode"}/${id}`);
  }


 public addProFromRemote(product:Product):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/addProduct",product)
  }

  public addReview(id:number,review:number)
  {
    return this.http.get(`${"http://localhost:8080/products"}/${id}/${review}`);
  }
  public getProductListBySearch(productSearch : any) :  Observable<any>{
    return  this.http.get('http://localhost:8080/getProductBySearch/'+productSearch) 
  }

  public getbyprice(min:number,max:number)
  {
    return this.http.get(`${"http://localhost:8080/search"}/${min}/${max}`);
  }
}
