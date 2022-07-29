create table master (
  master_id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  password varchar(350) NOT NULL
 );
 
create table website (
  website_id int NOT NULL AUTO_INCREMENT,
  urlname varchar(100) DEFAULT NULL,
  master_id int NOT NULL
 );

create table accounts (
  account_id int NOT NULL AUTO_INCREMENT,
  accnames varchar(100) NOT NULL,
  accpassword varchar(350) NOT NULL,
  website_id int NOT NULL
 );