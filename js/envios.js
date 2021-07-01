const url = "https://60cb92e121337e0017e45152.mockapi.io/usuarios/Sucursales";

// BOTONES

let btnAgregar = document.querySelector(".btnAgregar");
btnAgregar.addEventListener("click", subirDatos);

let btnAgregar3 = document.querySelector(".btnAgregar3");
btnAgregar3.addEventListener("click", subirDatos);


// OBJETOS JSON

class modelosSucursal {
  constructor(nombre, direccion, horario) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.horario = horario;
  }
}

let sucursales = [];

//CARGAR TABLA

async function traerDatos() {
  let tabla = document.querySelector("#tablaSucursales");
  tabla.innerHTML = "";
  try {
    let res = await fetch(url); // GET url
    let json = await res.json(); // texto json a objeto
    let sucursales = json;
    for (const sucursal of sucursales) {
      tabla.innerHTML += `<tr>
            <td>${sucursal.id}</td>
             
            <td>${sucursal.ciudad}</td>
            <td>${sucursal.direccion}</td>
            <td>${sucursal.horario}</td>
            <td class="botonesTabla"><button class="btnBoton btnEliminar" data-id='${sucursal.id}' > eliminar </button></td>
            <td class="botonesTabla"><button class="btnBoton btnEditar" data-id='${sucursal.id}' > editar </button></td>
        </tr>`;
      document.querySelectorAll(".btnEliminar").forEach((button) => {
        button.addEventListener("click", eliminarSucursal);
      });
      document.querySelectorAll(".btnEditar").forEach((button) => {
        button.addEventListener("click", editarSucursal);
      });
    }
  } catch (event) {
    console.log(event);
  }
}

// AGREGAR SUCURSAL

async function subirDatos() {
  let quantity;
  console.log(this);
  if (this === btnAgregar) {
    quantity = 1;
  } else if (this === btnAgregar3) {
    quantity = 3;
  }
  if (
    formCiudad.value != "" &&
    formDireccion.value != "" &&
    formHorario.value != ""
  ) {
    let sucursal = {
      ciudad: formCiudad.value,
      direccion: formDireccion.value,
      horario: formHorario.value,
    };

    for (let i = 0; i < quantity; i++) {
      try {
        await fetch(url, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(sucursal),
        });
      } catch (event) {
        console.log(event);
      }
    }
    traerDatos();
    vaciarInputs();
  } else {
    alert("Completa los campos");
  }
}

function vaciarInputs() {
  formCiudad.value = "";
  formDireccion.value = "";
  formHorario.value = "";
}

// ELIMINAR FILA

async function eliminarSucursal() {
  let id = this.dataset.id;
  try {
    let res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
  traerDatos();
}

// MODIFICAR SUCURSAL

async function editarSucursal() {
  let id = this.dataset.id;

  if (
    formCiudad.value != "" &&
    formDireccion.value != "" &&
    formHorario.value != ""
  ) {
    let sucursal = {
      ciudad: formCiudad.value,
      direccion: formDireccion.value,
      horario: formHorario.value,
    };
    try {
      await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(sucursal),
      });
    } catch (event) {
      console.log(event);
    }

    traerDatos();
    vaciarInputs();
  } else {
    alert("Completa los campos");
  }
}

traerDatos();
