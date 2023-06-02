package com.piyush.comp.ang_shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.piyush.comp.ang_shop.model.Product;
import com.piyush.comp.ang_shop.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository prorepo;
	
	
	public Product addProduct(Product product)
	{
		
		return prorepo.save(product);
		
	}
	
	public Product fetchProductByCode(int code)
	{
		return prorepo.findByCode(code);
	}

	public List<Product> getProducts() {
		
		return this.prorepo.findAll();
	}
	
	public Product saveRating(Product product)
	{
		return prorepo.save(product);
		
		
	}
	public List<Product> getProductListBySearch(String search) {
		return prorepo.findBySearch(search);
	}
	public List<Product> searchPrice(int min, int max) {
		// TODO Auto-generated method stub
		return prorepo.searchPrice(min, max);
	}

}
