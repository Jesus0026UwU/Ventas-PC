// Mostrar mensaje al cargar
window.addEventListener("load", () => {
    console.log("Página cargada con éxito");
  });
  
  // Buscador de computadoras
  const buscador = document.getElementById("buscador");
  const items = document.querySelectorAll(".item");
  
  buscador.addEventListener("input", () => {
    const valor = buscador.value.toLowerCase();
  
    items.forEach(item => {
      const nombre = item.getAttribute("data-nombre");
      if (nombre.includes(valor)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const botonesAgregar = document.querySelectorAll(".btn-agregar");
const btnVerCarrito = document.getElementById("ver-carrito");
const divCarrito = document.getElementById("carrito");
const btnVaciar = document.getElementById("vaciar-carrito");

// Agregar producto al carrito
botonesAgregar.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const producto = btn.parentElement;
    const nombre = producto.querySelector("h3").textContent;
    const descripcion = producto.querySelector("p").textContent;

    carrito.push({ nombre, descripcion });
    actualizarCarrito();
  });
});

// Mostrar/Ocultar carrito
btnVerCarrito.addEventListener("click", () => {
  divCarrito.classList.toggle("visible");
});

// Vaciar carrito
btnVaciar.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach((prod, i) => {
    const li = document.createElement("li");
    li.textContent = `${prod.nombre} - ${prod.descripcion}`;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => {
      carrito.splice(i, 1);
      actualizarCarrito();
    };
    li.appendChild(btnEliminar);
    listaCarrito.appendChild(li);
  });
}