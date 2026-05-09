create database smarttodo;
use smarttodo;

create table Users(
 id int primary key auto_increment,
 email varchar(100) unique,
 password varchar(255)
);