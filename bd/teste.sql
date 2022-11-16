create database users;

CREATE TABLE usuarios( 
  id INT NOT NULL AUTO_INCREMENT, 
  nome_user VARCHAR(40) NOT NULL,
  senha VARCHAR(20) NOT NULL, 
  email VARCHAR(40) NOT NULL, 
  PRIMARY KEY(id));