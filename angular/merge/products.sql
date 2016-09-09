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

create table study(
	id int not null auto_increment primary key,
	admin int not null,
	create_date DATE,
	title varchar(200),
	description TEXT,
);

insert into user(userID, password, email) values('jumpegg', '870915', 'jumpegg@naver.com');
insert into study(admin, create_date) values(1, now());