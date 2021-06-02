
// OBJETOS JSON  

class modelosSucursal { constructor (id, nombre, direccion, horario)
          
  {this.id= id
  this.nombre=nombre
  this.direccion= direccion 
  this.horario= horario } }

let sucursalBsAs= new modelosSucursal ("1","Buenos Aires","Cabildo 2850","10 a 20 hs")

let sucursalBahia =  new modelosSucursal ("2","Bahia","9 de julio  1577"," 8:30 a 13 - 16 a 21 hs")

let sucursalSalta= new modelosSucursal ("3","Salta","Moreno 269","9 a 20 hs")

let sucursales = []

sucursales.push (sucursalBsAs);
sucursales.push (sucursalBahia);
sucursales.push (sucursalSalta);

//CARGAR TABLA

function cargarTabla() {


for (let i = 0; i < sucursales.length; i++) {
const sucursal = sucursales[i];
tablaSucursales.innerHTML += `<tr>
<td><b>${sucursal.id } </b></td>
<td>${sucursal.nombre}</td>
<td>${sucursal.direccion}</td>
<td>${sucursal.horario}</td>
</tr>` ; 
}
}

cargarTabla();

// AGREGAR SUCURSAL 

var btnAgregar = document.querySelector(".btnAgregar");
btnAgregar.addEventListener("click", agregarSucursal);

function agregarSucursal () {
if ((formCiudad.value != '') && (formDireccion.value != '') && (formHorario.value != '') ) {

let sucursal_agregada= new modelosSucursal (sucursales.length + 1 ,formCiudad.value,formDireccion.value, formHorario.value)
sucursales.push (sucursal_agregada);

vaciarInputs ();
tablaSucursales.innerHTML = ""
cargarTabla ();


} else {
alert("Completa los campos");
}

}
function vaciarInputs() {
formCiudad.value = '';
formDireccion.value = '';
formHorario.value = '';
}


// ELIMINAR TODO

var btnEliminar = document.querySelector(".btnEliminar");
btnEliminar.addEventListener("click", eliminarSucursal);



function eliminarSucursal () {
sucursales = [];
tablaSucursales.innerHTML = '';

}



// AGREGAR TRES


var btnAgregar3 = document.querySelector(".btnAgregar3");
btnAgregar3.addEventListener("click", agregar3);



function agregar3 () { 

if ((formCiudad.value != '') && (formDireccion.value != '') && (formHorario.value != '') ) {

let sucursal_agregada3= new modelosSucursal (sucursales.length +1 ,formCiudad.value,formDireccion.value, formHorario.value)


sucursales.push (sucursal_agregada3 );
sucursales.push (sucursal_agregada3 );
sucursales.push (sucursal_agregada3 );



vaciarInputs ();
tablaSucursales.innerHTML = ""
cargarTabla ();

} 
}


/*

 function agregar3 () {
  for (let i = 0; i < 3; i++) {
    agregarSucursal();
  }
        tablasucursales.innerHTML = '';
        cargarTabla();
        vaciarInputs();
  }


  */