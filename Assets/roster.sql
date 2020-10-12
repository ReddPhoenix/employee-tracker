DROP DATABASE IF EXISTS roster_db;

-- Creates the "roster_db" database --
CREATE DATABASE roster_db;

-- Makes it so all of the following code will affect roster_db --
USE roster_db;

-- Creates the table "employee" within roster_db --
CREATE TABLE employee (
  -- Makes an integer column called "id" which increments by one and is a primary key --
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  -- Makes a string column called "first_name" which cannot contain null --
  first_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "last_name" which cannot contain null --
  last_name VARCHAR(30) NOT NULL,  
  -- Makes a integer column called "role_id" which cannot contain null --
  role_id INTEGER NOT NULL,
  -- Makes a integer column called "manager_id" --
  manager_id INTEGER  
);

-- Creates the table "role" within roster_db --
CREATE TABLE role (
  -- Makes an integer column called "id" which increments by one and is a primary key --
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  -- Makes a string column called "title" which cannot contain null --
  title VARCHAR(30) NOT NULL,
  -- Makes a decimal column called "salary" with 10 places --
  -- for the integer and 2 places for the fractional --
  salary DECIMAL (10, 2) NOT NULL,
  -- Makes an integer column called "department_id" which cannot be null
  department_id INTEGER NOT NULL
);
  
-- Creates the table "department" within roster_db --
CREATE TABLE department (
  -- Makes an integer column called "id" which increments by one and is a primary key --
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);

SELECT * FROM roster_db.department;
SELECT * FROM roster_db.employee;
SELECT * FROM roster_db.role;