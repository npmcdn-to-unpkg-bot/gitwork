create table products(
id int not null auto_increment primary key,
name varchar(50) not null,
modelnumber varchar(15) not null,
series varchar(30) not null
);

create table user(
	id int not null auto_increment primary key,
	userID varchar(100) not null,
	password varchar(100) not null,
	email varchar(100) not null
);

insert into user(userID, password, email) values('jumpegg', '870915', 'jumpegg@naver.com');