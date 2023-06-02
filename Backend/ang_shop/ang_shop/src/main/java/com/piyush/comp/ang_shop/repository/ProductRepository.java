package com.piyush.comp.ang_shop.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.piyush.comp.ang_shop.model.Product;



public interface ProductRepository extends JpaRepository<Product,Integer> {
  public Product findByCode(int code);
  
  

  @Query("SELECT p from Product p Where INSTR(Concat(p.code,p.probrand,p.proname),:search)>0 or INSTR(Concat(p.code,p.proname,p.probrand),:search)>0 or INSTR(Concat(p.probrand,p.code,p.proname),:search)>0 or INSTR(Concat(p.probrand,p.proname,p.code),:search)>0 or INSTR(Concat(p.proname,p.code,p.probrand),:search)>0 or INSTR(Concat(p.proname,p.probrand,p.code),:search)>0 ")
	public List<Product> findBySearch(@Param("search") String search);
 
  
  @Query("from Product where price between :min and :max")
	public List<Product> searchPrice(@Param("min") int min, @Param("max") int max);
}
