package com.piyush.comp.ang_shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.piyush.comp.ang_shop.model.Product;
import com.piyush.comp.ang_shop.service.ProductService;



@RestController
public class ProductController {
  int ra=0;
	
	@Autowired
	private ProductService proservice;
	
	
	@PostMapping("/addProduct")
	@CrossOrigin(origins="http://localhost:4200")
	public Product AddProduct(@RequestBody Product product) throws Exception
	{
		
		int tempCode=product.getCode();
		 
			Product productobj= proservice.fetchProductByCode(tempCode);
			if(productobj!=null)
			{
				throw new Exception("Product With This "+tempCode+" is already present");
			}
			Product ProductObj=null;
			ProductObj=proservice.addProduct(product);
			return ProductObj;
		
	}
	
	 
	@GetMapping("/products")
	@CrossOrigin(origins="http://localhost:4200")
	 public List<Product> getProducts()
	 {
		List<Product> ProductObj=null;
		ProductObj=proservice.getProducts(); ;
		
		return ProductObj;
	 }
	
	@GetMapping("/products/{code}")
	@CrossOrigin(origins="http://localhost:4200")
	public Product getbyId(@PathVariable("code") int cod)
	{
		return this.proservice.fetchProductByCode(cod);
	}
	
	@GetMapping("/products/{code}/{rating}")
	@CrossOrigin(origins="http://localhost:4200")
	public Product getbyId(@PathVariable("code") int cod,@PathVariable("rating") int rating)
	{
		
		
		Product productObj=proservice.fetchProductByCode(cod);
		int rat=productObj.getNorated();
		 ra=productObj.getTotalrating();
		productObj.setRating((rating+ra)/(rat+1));
		productObj.setNorated(rat+1);
		productObj.setTotalrating(rating+ra);
		productObj=proservice.saveRating(productObj);
		return productObj;
		
	}
	@GetMapping("/getProductBySearch/{productSearch}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Product> getProductListBySearch(@PathVariable("productSearch") String productSearch) throws Exception {
	
		List<Product> productList;
		try {
			productList = proservice.getProductListBySearch(productSearch);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		return productList;
	}
	
	
	@GetMapping("/search/{min}/{max}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Product> searchPrice(@PathVariable("min") int min, @PathVariable("max") int max) throws Exception {
		List<Product> products;
		try {

			products = proservice.searchPrice(min, max);
		} catch (Exception e) {
			throw new Exception(e.getMessage());

		}
		return products;
	}
}
