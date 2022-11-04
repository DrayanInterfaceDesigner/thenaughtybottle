create database agoravai;
CREATE TABLE clientes(
    id_clientes int PRIMARY KEY AUTO_INCREMENT not null,
    nome varchar(40) not null,
    senha varchar(20) not null,
    email varchar(40) not null,
    endereco varchar(50) not null,
    cpf int(11) not null,
    UNIQUE (cpf));
    
CREATE TABLE produtos(
id_produto int PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome varchar(40) not null,
valor float not null,
estoque int);

create TABLE pagamento(
id_pagamento int primary key auto_increment,
valor_total float not null);

create table forma_pagamento(
id_pagamento int primary key auto_increment 
references pagamento(id_pagamento),
nome varchar(10));


CREATE TABLE carrinho(
id_carrinho int primary key auto_increment not null,
quantidade int,
valor_total float);

alter table carrinho
add id_pagamento int not null,
add foreign key (id_pagamento) references pagamento(id_pagamento);

alter table clientes
add id_carrinho int not null,
add foreign key (id_carrinho) references carrinho(id_carrinho);

alter table pagamento
add id_carrinho int not null,
add foreign key (id_carrinho) references carrinho(id_carrinho);

drop database nossosite;

alter table clientes
add id_endereco int not null,
add foreign key (id_endereco) 
references endereco(id_endereco);
    
alter table clientes
drop column endereco;
    
alter table clientes
drop column cpf;
    
    
alter table clientes
add unique (cpf);
    
alter table clientes
add cpf varchar(11);
    

alter table produtos
add descricao varchar(600),
add model_adress varchar(50);

alter table produtos
add cor varchar(6);




