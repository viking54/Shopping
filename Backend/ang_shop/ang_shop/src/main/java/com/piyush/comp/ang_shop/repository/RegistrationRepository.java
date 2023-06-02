package com.piyush.comp.ang_shop.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.comp.ang_shop.model.User;

public interface RegistrationRepository extends JpaRepository<User,Integer>{

	public User findByEmailId(String emailId);

	public User findByEmailIdAndPassword(String emailId, String password);

}
