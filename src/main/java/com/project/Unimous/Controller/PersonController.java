package com.project.Unimous.Controller;

import com.project.Unimous.model.Person;
import com.project.Unimous.repository.PersonRepository;
import netscape.javascript.JSObject;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class PersonController {
  @Autowired
  PersonRepository personRepository;

  @GetMapping("/persons")
  public ResponseEntity<List<Person>> getPersons(@RequestParam(required = false) String fname){
    List<Person> persons = new ArrayList<>();
    try {

      if(fname==null)
        persons.addAll(personRepository.findAll());
      else
        persons.addAll(personRepository.findPersonByfname(fname));
      if(persons.isEmpty()){
        System.out.println("list empty");
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(persons,HttpStatus.OK);
    }catch (Exception e){
      return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/person")
  public ResponseEntity<Person> postNewPerson(@RequestBody(required = true) Person person){
    Person a = new Person(person);
    personRepository.save(a);
    System.out.println(a+" has been added to database");
    return new ResponseEntity<>(person, HttpStatus.OK);
  }

  @GetMapping("/persons/{id}")
  public ResponseEntity<Person> getPerson(@PathVariable Long id) {
    Person person;
    try {
      person = personRepository.findPersonById(id);
      if (person == null) {
        System.out.println("list empty");
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      else {
        return new ResponseEntity<>(person, HttpStatus.OK);
      }
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @DeleteMapping("/persons/{id}")
  public String deletePerson(@PathVariable Long id){
    try {
      Person person = personRepository.findPersonById(id);
      if (person == null) {
        System.out.println("Person query outbound");
        return "Person query outbound";
      }
      else {
        personRepository.deleteById(id);
        return "Person deleted";
      }
    } catch (Exception e){
      return "Internal server error";
    }
  }
}
