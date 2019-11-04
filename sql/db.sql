CREATE DATABASE ventasApp

create table if not exists cliente(
    clienteid integer not null primary key generated by default as identity,
    cedula integer not null check(cedula > 0),
    nombre text not null check(nombre <> '')
);

create table if not exists producto(
    productoid integer not null primary key generated by default as identity,
    descripcion text not null check(descripcion <> ''),
    precio integer not null check(precio > 0),
    codigoproducto text not null check(codigoproducto <> '')
);

create table if not exists usuario(
	usuarioid integer not null primary key generated by default as identity,
	usuario text not null check(usuario <> ''),
	email text not null check(email <> ''),
	password text not null
);


create table if not exists venta(
    ventaid integer not null primary key generated by default as identity,
    clienteid integer not null references cliente(clienteid),
    total integer,
    fecha date not null,
	usuarioid integer not null references usuario(usuarioid)
);

create table if not exists ventadetalle(
    ventadetalleid integer not null primary key generated by default as identity,
    ventaid integer not null references venta(ventaid),
    productoid integer not null references producto(productoid),
    precio integer not null
)

-- alter table venta add constraint venta_usuarioid_fkey foreign key(usuarioid) references usuario(usuarioid) on delete cascade on update cascade

insert into cliente(cedula, nombre)
	values(1111111, 'Marisol Duarte');
	
insert into cliente(cedula, nombre)
	values(1111112, 'Fatima Duarte');
	
insert into cliente(cedula, nombre)
	values(1111113, 'Gabriel Gimenez');
	
insert into cliente(cedula, nombre)
	values(1111114, 'Aylen Duarte');
	
insert into cliente(cedula, nombre)
	values(1111115, 'Marilia Aldama');
	
insert into cliente(cedula, nombre)
	values(1111116, 'Juan Gimenez');
	
insert into cliente(cedula, nombre)
	values(1111117, 'Jose Bordon');


insert into producto(descripcion, precio, codigoproducto)
	values('Bicicleta Aro 25', 450000, 'BICCAL84C');

insert into producto(descripcion, precio, codigoproducto)
	values('Licuadora Arno', 230000, 'LICUARNO77A');

insert into producto(descripcion, precio, codigoproducto)
	values('Horno Electrico Midas', 830000, 'HORNOMID25B');

insert into producto(descripcion, precio, codigoproducto)
	values('Estufa electrica', 380000, 'ESTUELEC784A');

insert into producto(descripcion, precio, codigoproducto)
	values('HUAWEI P30 PRO', 4500000, 'CELHUAP30A');

insert into producto(descripcion, precio, codigoproducto)
	values('SAMSUNG GALAXY NOTE 10+', 6500000, 'CELSAMN10P');

insert into producto(descripcion, precio, codigoproducto)
	values('SAMSUNG GALAXY NOTE 10', 5500000, 'CELSAMN10');

insert into producto(descripcion, precio, codigoproducto)
	values('Sommier Matrimonial Koala 2 Plazas', 1550000, 'SOMKOAP25A');

insert into producto(descripcion, precio, codigoproducto)
	values('Acondicionador de Aire James 12.000 B.T.U', 2325780, 'AAJAMES12M');

insert into producto(descripcion, precio, codigoproducto)
	values('Smart TV LG 49" 4K ', 8754123, 'SMTVLG49P');	