DROP DATABASE IF EXISTS Tienda;
CREATE DATABASE Tienda;
USE Tienda;

CREATE TABLE Productos (
	ID int(3) AUTO_INCREMENT,
	Nombre varchar(40) NOT NULL,
	Descripcion varchar(400) NOT NULL,
	Precio varchar(7) NOT NULL,
	Categoria varchar(200) NOT NULL,
    Foto varchar(40) NOT NULL,
	CONSTRAINT pk_Producto PRIMARY KEY (ID)
);

CREATE TABLE Clientes (
	Codigo int(5) AUTO_INCREMENT,
	Nombre varchar(40) NOT NULL,
    Apellido varchar(40) NOT NULL,
    Correo varchar(40) NOT NULL,
    Contrasena varchar(40) NOT NULL,
    Ciudad varchar(20) NOT NULL,
	CONSTRAINT pk_Clientes PRIMARY KEY (Codigo)
);

CREATE TABLE Contacto (
	Cod int(5) AUTO_INCREMENT,
	Nombre varchar(40) NOT NULL,
    Apellido varchar(40) NOT NULL,
    Correo varchar(40) NOT NULL,
    Ciudad varchar(40) NOT NULL,
    Texto varchar(200) NOT NULL,
	CONSTRAINT pk_Contacto PRIMARY KEY (Cod)
);

CREATE TABLE Compras (
	CodigoCompra int(5) AUTO_INCREMENT,
	Fecha varchar(40) NOT NULL,
	NombreProducto varchar(40) NOT NULL,
    CorreoCliente varchar(40) NOT NULL,
	CONSTRAINT pk_Compras PRIMARY KEY (CodigoCompra),
	CONSTRAINT fk_nombreProducto FOREIGN KEY (NombreProducto)
		REFERENCES Productos(Nombre)
		ON UPDATE CASCADE
		ON DELETE RESTRICT,
    CONSTRAINT fk_correoCliente FOREIGN KEY (CorreoCliente)
		REFERENCES Clientes(Correo)
		ON UPDATE CASCADE
		ON DELETE RESTRICT
);

DROP USER IF EXISTS 'Tienda';
CREATE USER 'Tienda' IDENTIFIED BY 'Tienda';

GRANT ALL ON Tienda.* to 'Tienda';

INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Aplicación web','Conjunto de páginas que pueden cambiar conforme el usuario','500','Páginas web completas','../Imagenes/tarjeta10.png');
INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Página web','Conjunto de páginas web estáticas','400','Páginas web completas','../Imagenes/tarjeta3.png');
INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Página estática','Página web que no cambia con los diferentes usuarios','300','Páginas web completas','../Imagenes/tarjeta4.png');
INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Logo','Imagen de tu marca o negocio','25','Recursos web','../Imagenes/tarjeta1.png');
INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Banner','Cartel pubilicitario o informativo en la página principal','75','Recursos web','../Imagenes/tarjeta5.png');
INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Widget','Objeto adicional que se puede añadir a una página','100','Recursos web','../Imagenes/tarjeta6.png');
INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Historia','Publicidad tamaño de una historia para Instagram o Facebook','75','Recursos publicitarios','../Imagenes/tarjeta7.png');
INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Cartel','Cartel publicitario de diferentes tamaños','100','Recursos publicitarios','../Imagenes/tarjeta8.png');
INSERT INTO Productos (Nombre,Descripcion,Precio,Categoria,Foto) VALUES
	('Video','Video corto publicitario','150','Recursos publicitarios','../Imagenes/tarjeta9.png');


INSERT INTO Clientes (Nombre, Apellido, Correo, Contrasena, Ciudad)
 VALUES ('Admin', 'Admin', 'admin@gmail.com',md5('admin'), 'Administrador');
INSERT INTO Clientes (Nombre, Apellido, Correo, Contrasena, Ciudad)
 VALUES ('Anuar', 'Crack', 'anuar@gmail.com',md5('anuar'), 'Almeria');
INSERT INTO Clientes (Nombre, Apellido, Correo, Contrasena, Ciudad)
 VALUES ('Rocio', 'Lopez', 'rocio3221ef@gmail.com',md5('rocio'), 'Madrid');
INSERT INTO Clientes (Nombre, Apellido, Correo, Contrasena, Ciudad)
 VALUES ('Sergio', 'Vargas', 'sergiovargas353@gmail.com',md5('sergio'), 'Valencia');
