
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

REATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger) VALUES ('?');