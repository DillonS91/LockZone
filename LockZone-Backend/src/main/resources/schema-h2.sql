create table users(
	username varchar(50) not null primary key,
	password varchar(100) not null,
	enabled boolean not null
	);

create table authorities (
		username varchar(50) not null,
		authority varchar(50) not null,
		constraint fk_authorities_users foreign key(username) references users(username)
	);
	
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