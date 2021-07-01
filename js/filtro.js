


let busqueda = document.getElementById('buscar');
let table = document.getElementById("tablaEnvios").tBodies[0];

buscaTabla = function(){
  texto = busqueda.value.toLowerCase();
  var r=0;
  while(row = table.rows[r++])
  {
    if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
      row.style.display = null;
    else
      row.style.display = 'none';
  }
}

busqueda.addEventListener('keyup', buscaTabla);

/*
async function filtrarDatos() {
    let tabla = document.querySelector("#tablaSucursales");
    
    try {
    
      let res = await fetch(url); // GET url
      let json = await res.json(); // texto json a objeto
      let sucursales = json;
      let ciudad = this.dataset.ciudad;


if (selectFiltro.value == 1 ) { sucursales  }
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
  }   */