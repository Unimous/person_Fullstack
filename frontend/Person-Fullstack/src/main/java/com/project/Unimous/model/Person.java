package com.project.Unimous.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name = "persons")
public class Person {
  @Id
  @GeneratedValue(strategy = GenerationType.TABLE)
  private Long id;
  @Column(name="fname")
  private String fname;
  @Column(name="lname")
  private String lname;
  @Column(name="age")
  private Long age;

  public Person(String fname, String lname, long age){

    this.fname=fname;
    this.lname=lname;
    this.age=age;
  }

  public Person(Person person){
    this.fname = person.fname;
    this.lname = person.lname;
    this.age = person.age;
  }

  public Long getId() {
    return id;
  }

  public String getFname() {
    return fname;
  }

  public String getLname() {
    return lname;
  }

  public Long getAge() {
    return age;
  }

  @Override
  public String toString() {
    return "Person [id=" + id + ", fname=" + fname + ", lname=" + lname + ", age=" + age + "]";
  }
}
