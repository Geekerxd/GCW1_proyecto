CREATE DATABASE railroadcrossing;
use railroadcrossing;

CREATE TABLE IF NOT EXISTS usuario(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasena VARCHAR(16) NOT NULL,
    foto BLOB NOT NULL,
    puntaje FLOAT DEFAULT 0.0,
    fecha TIMESTAMP
);

select * from usuario;

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_signupUsuario`(
IN inNombre VARCHAR(50),
IN inContra VARCHAR(16),
IN inEmail VARCHAR(100),
IN inFoto BLOB
)
BEGIN
	INSERT INTO usuario(nombre, email, contrasena, foto) 
    VALUES(inNombre, inEmail, inContra, inFoto);
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_loginUsuario`(
IN inEmail VARCHAR(100),
IN inContra VARCHAR(16)
)
BEGIN
	SELECT usuario.email, usuario.contrasena, usuario.foto, usuario.nombre, usuario.puntaje
    FROM usuario
    WHERE usuario.email = inEmail AND usuario.contrasena = inContra;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_actualizaUsuarios`(
IN inEmail1 VARCHAR(100),
IN inContra1 VARCHAR(16),
IN inPuntaje1 FLOAT,
IN inEmail2 VARCHAR(100),
IN inContra2 VARCHAR(16),
IN inPuntaje2 FLOAT
)
BEGIN

	DECLARE idUser1 INT;
    DECLARE idUser2 INT;
    DECLARE puntosUser1 FLOAT;
    DECLARE puntosUser2 FLOAT;

	SELECT id INTO idUser1
    FROM usuario
    WHERE email = inEmail1 AND contrasena = inContra1;
    
    SELECT puntaje INTO puntosUser1
    FROM usuario
    WHERE email = inEmail1 AND contrasena = inContra1;
    
    SELECT id INTO idUser2
    FROM usuario
    WHERE email = inEmail2 AND contrasena = inContra2;
    
    SELECT puntaje INTO puntosUser2
    FROM usuario
    WHERE email = inEmail2 AND contrasena = inContra2;

	UPDATE usuario
    SET usuario.puntaje = fn_comparaPuntaje(inPuntaje1, idUser1),
		usuario.fecha = IF(fn_comparaPuntaje(inPuntaje1, idUser1) = puntosUser1, usuario.fecha,NOW())
    WHERE usuario.id = idUser1;
    
    UPDATE usuario
    SET usuario.puntaje = fn_comparaPuntaje(inPuntaje2, idUser2),
		usuario.fecha = IF(fn_comparaPuntaje(inPuntaje2, idUser2) = puntosUser2, usuario.fecha,NOW())
    WHERE usuario.id = idUser2;
    
    SELECT id
    FROM usuario
    WHERE usuario.email = inEmail1;
END

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_comparaPuntaje`(
puntaje1 FLOAT,
idU INT
) RETURNS int
    DETERMINISTIC
BEGIN
	DECLARE valor FLOAT;

	SELECT IF(usuario.puntaje < puntaje1, puntaje1, usuario.puntaje) INTO valor
    FROM usuario
    WHERE usuario.id = idU;
RETURN valor;
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_traeScores`()
BEGIN
	SELECT U.nombre, U.puntaje, U.fecha, U.foto
    FROM usuario AS U
    ORDER BY U.puntaje DESC;
END

CALL sp_actualizaUsuarios("karina@gmail.com", "123456K_", 5.0, "dani_g.mazatan@hotmail.com", "123456D_", 15.0);
CALL sp_loginUsuario("karina@gmail.com", "123456K_");
CALL sp_traeScores();

ALTER TABLE usuario
ADD fecha TIMESTAMP;

