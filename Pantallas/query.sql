CREATE DATABASE IF NOT EXISTS RailRoadPlaying;
USE RailRoadPlaying;

CREATE TABLE IF NOT EXISTS usuario (
	id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50)  not null,
    email VARCHAR(50)  not null,
    contrasena VARCHAR(8) not null UNIQUE,
    foto VARCHAR(100),
    puntuacion int default 0
);
DROP TABLE usuario;

INSERT INTO usuario(nombre_usuario,email,contrasena) Values ("Diego","dani_g.@hotmail.com","aguilar1");
SELECT* FROM usuario;