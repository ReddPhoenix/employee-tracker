-- Makes it so all of the following code will affect roster_db --
USE roster_db;

-- Data entered into employee table --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- Data entered into columns --
VALUES 	("Donnie", "Ellison", 4, NULL), -- 1 --
		("Cai", "Guthrie", 4, NULL), 
        ("Jadon", "Glenn", 3, 4), -- 3  --
        ("Niko", "Griffith", 2, 6),
        ("Jasper", "Cunnigham", 2, 6), -- 5 --
        ("Esmee", "Hayes", 1, NULL),
        ("Charlene", "Madden", 8, 10), -- 7 --
        ("Dianne", "Wiley", 5, 5),
        ("Hareem", "Ritter", 6, 8), -- 9 --
        ("Ismael", "Fitzgerald", 7, 5),
        ("Tyler", "Waller", 8, 10), -- 11 --
        ("Debra", "Sandoval", 8, 10);

-- Data entered into role table --        
INSERT INTO role (title, salary, department_id)
-- Data entered into columns --
VALUES 	("Regional Manager", 200000, 1),
		("Territory Sales Manager", 150000, 2),
        ("Sales Team Lead", 100000.75, 3),
        ("Sales Associate", 45000.25, 4),
        ("Web Design Team Manager", 65000.89, 5),
        ("Web Design Associate", 50000, 6),
        ("Audit Team Lead", 95000.22, 7),
        ("Auditor", 82000, 8);  
        
-- Data entered into department table --        
INSERT INTO department (name)
-- Data entered into columns --
VALUES 	("Upper Management"),
		("Sales"),
        ("Web Design"),
        ("Audit");         
 
SELECT * FROM roster_db.department;
SELECT * FROM roster_db.employee;
SELECT * FROM roster_db.role;