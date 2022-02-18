package com.project.Unimous.repository;

import com.project.Unimous.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.Nullable;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {
  @Query("select p from Person p where p.fname = ?1")
  List<Person> findPersonByfname(@Nullable String fname);

  @Query("select p from Person p where p.lname = ?1")
  List<Person> findPersonBylname(@Nullable String lname);

  @Query("select p from Person p where p.age = ?1")
  List<Person> findPersonByage(@Nullable int age);

  @Query("select p from Person p where p.id =?1")
  Person findPersonById(@Nullable long id);

}
