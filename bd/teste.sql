create database users;

CREATE TABLE usuarios( 
  id INT NOT NULL AUTO_INCREMENT, 
  nome_user VARCHAR(40) NOT NULL,
  senha VARCHAR(20) NOT NULL, 
  email VARCHAR(40) NOT NULL, 
  PRIMARY KEY(id));

INSERT INTO users.usuarios(nome_user, senha, email) 
VALUES('Jobersvaldo', '1234','llll@gmail.com'),
('Reinaldo', '12345', 'naosei@gmail.com');