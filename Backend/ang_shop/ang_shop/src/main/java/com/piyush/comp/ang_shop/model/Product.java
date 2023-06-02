package com.piyush.comp.ang_shop.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
@Id
private int code;
private String proname;
private String probrand;
private String image;
private int rating;
private int price;
private int norated;
private int totalrating;
public int getTotalrating() {
	return totalrating;
}

public void setTotalrating(int totalrating) {
	this.totalrating = totalrating;
}

public Product() {
	
}

public int getPrice() {
	return price;
}

public void setPrice(int price) {
	this.price = price;
}

public int getCode() {
	return code;
}
public int getNorated() {
	return norated;
}

public void setNorated(int norated) {
	this.norated = norated;
}

public void setCode(int code) {
	this.code = code;
}
public String getProname() {
	return proname;
}
public void setProname(String proname) {
	this.proname = proname;
}
public String getProbrand() {
	return probrand;
}
public void setProbrand(String probrand) {
	this.probrand = probrand;
}
public int getRating() {
	return rating;
}
public void setRating(int rating) {
	this.rating = rating;
}

public Product(int code, String proname, String probrand, String image, int rating , int price ,int norated,int totalrating) {
	super();
	this.code = code;
	this.proname = proname;
	this.probrand = probrand;
	this.image = image;
	this.rating = rating;
	this.price= price;
	this.norated=norated;
	this.totalrating=totalrating;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}

}
