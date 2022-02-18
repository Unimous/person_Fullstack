/* Initializing database with table
/ 
/ 
*/

CREATE TABLE persons(
  id SERIALIZABLE primary key,
  fname VARCHAR(32),
  lname VARCHAR(64),
  age INTEGER
);

INSERT INTO persons(id,fname, lname, age) VALUES (1,'mauno','a',1);
INSERT INTO persons(id,fname, lname, age) VALUES (2,'kari','a',1);
INSERT INTO persons(id,fname, lname, age) VALUES (3,'sami','a',1);
INSERT INTO persons(id,fname, lname, age) VALUES (4,'pekka','a',1);
INSERT INTO persons(id,fname, lname, age) VALUES (5,'jarmo','a',1);
INSERT INTO persons(id,fname, lname, age) VALUES (6,'jorma','a',1);