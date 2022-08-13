create table master (
  master_id int NOT NULL AUTO_INCREMENT primary key,
  username varchar(100) NOT NULL,
  firstName varchar(100) NOT NULL,
  lastName varchar(100) NOT NULL,
  email varchar(100) NOT NULL
 );
 	
create table website (
  website_id int NOT NULL AUTO_INCREMENT primary key,
  name varchar(100) DEFAULT NULL,
  master_id int NOT NULL,
  
  foreign key (master_id) references master(master_id) ON DELETE CASCADE
 );

create table accounts (
  account_id int NOT NULL AUTO_INCREMENT primary key,
  accnames varchar(100) NOT NULL,
  accpassword varchar(350) NOT NULL,
  website_id int NOT NULL,
  
  foreign key(website_id) references website(website_id) ON DELETE CASCADE
 );
 
 create table Users (
	username VARCHAR(50) Primary Key,
	password VARCHAR(100) not null,
	enabled boolean not null,
	master_id INT,
	
	foreign key (master_id) references master(master_id) ON DELETE CASCADE
);

create table authorities (
	username VARCHAR(50) not null,
	authority VARCHAR(50) not null,
	foreign key (username) references users(username) ON DELETE CASCADE
);