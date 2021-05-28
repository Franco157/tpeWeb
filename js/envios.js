"use strict";

var formCiudad = document.querySelector("#formCiudad");
var formDireccion = document.querySelector("#formDireccion");
var formHorario = document.querySelector("#formHorario");
var tablasucursales = document.querySelector("#tablaSucursales");

var btnAgregar = document.querySelector(".btnAgregar");
btnAgregar.addEventListener("click", agregarSucursal);

var btnAgregar3 = document.querySelector(".btnAgregar3");
btnAgregar3.addEventListener("click", agregar3);

var btnEliminar = document.querySelector(".btnEliminar");
btnEliminar.addEventListener("click", eliminarSucursal);



let sucursalBsas = {
  id: 0,
  nombre: "Buenos Aires",
  direccion: "Cabildo 3550",
  horario: "8hs a 20hs",
};

let sucursalSalta = {
    id: 1,
    nombre: "Salta",
    direccion: "9 de julio 2342",
    horario: "8hs a 13hs - 17hs a 21hs",
 
  };

let sucursalBahia = {
    id: 2,
    nombre: "Bahia Blanca",
    direccion: "Rivadavia 1151",
    horario: "8hs a 13hs - 17hs a 21hs",
  };


let sucursales = [];
sucursales.push(sucursalBsas);
sucursales.push(sucursalBahia);
sucursales.push(sucursalSalta);


cargarTabla();


function cargarTabla() {


  for (let i = 0; i < sucursales.length; i++) {
    const sucursal = sucursales[i];
    tablasucursales.innerHTML += `<tr>
    <td><b>${sucursal.id+1}</b></td>
    <td>${sucursal.nombre}</td>
    <td>${sucursal.direccion}</td>
    <td>${sucursal.horario}</td>
    </tr>` ; 
  }
}



function agregarSucursal () {
  if ((formCiudad.value != '') && (formDireccion.value != '') && (formHorario.value != '') ) {
    let suc = 
        {
          id: sucursales.length,
          nombre: formCiudad.value,
          direccion: formDireccion.value,
          horario: formHorario.value,
        }
        sucursales.push(suc);
        tablasucursales.innerHTML = '';
        cargarTabla();
        vaciarInputs();
  } else {
    alert("Completa los campos");
  }
  
}

function vaciarInputs() {
  formCiudad.value = '';
  formDireccion.value = '';
  formHorario.value = '';
}

function eliminarSucursal () {
  sucursales = [];
  tablasucursales.innerHTML = '';
  cargarTabla();
}

function agregar3 () {
  for (let i = 0; i < 3; i++) {
    agregarSucursal();
  }
        tablasucursales.innerHTML = '';
        cargarTabla();
        vaciarInputs();
  }
