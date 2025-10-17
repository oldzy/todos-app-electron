--CREATE DATABASE todo_db;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TINYTEXT,
    description TEXT,
    due_date DATETIME,
    is_finished BIT DEFAULT 0
);

INSERT INTO todos (title, description, due_date, is_finished) VALUES ('MaTache1','untruca faire','2025-10-10',false);
INSERT INTO todos (title, description, due_date, is_finished) VALUES ('Etudier SGBD','bla bla','2025-10-25',false);
INSERT INTO todos (title, description, due_date, is_finished) VALUES ('Etudier Reseau','blu blu','2025-10-23',false);
INSERT INTO todos (title, description, due_date, is_finished) VALUES ('Etudier Anglais','bli bli','2025-10-15',false);