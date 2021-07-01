

const btnFiltrar = document.querySelector ("#btn-filtrar").addEventListener ("click", filtrarDatos)



async function filtrarDatos() {
    let tabla = document.querySelector("#tablaSucursales");
    tabla.innerHTML = "";
    try {
    
      let res = await fetch(url); // GET url
      let json = await res.json(); // texto json a objeto
      let sucursales = json;
      let objetoAuxiliar ;  

if (selectFiltro.value == 1 ) { console.log ("anda el uno")}
else if (selectFiltro.value==2 ) {console.log ("anda el dos")  }     
else {console.log ("anda el tres")}             

  
      for (const sucursal of sucursales) {
        tabla.innerHTML += `<tr>
              <td>${sucursal.id}</td>
               
              <td>${sucursal.ciudad}</td>
              <td>${sucursal.direccion}</td>
              <td>${sucursal.horario}</td>
              <td><button class="btnEliminar" data-id='${sucursal.id}' > eliminar </button></td>
              <td><button class="btnEditar" data-id='${sucursal.id}' > editar </button></td>
          </tr>`; 
          document.querySelectorAll (".btnEliminar")
              .forEach ( (button) => {button.addEventListener ("click", eliminarFila) } ) ;
  
  
  
  
              
      }
    } catch (event) {
      console.log(event);
    }
  }