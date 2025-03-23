const shopProductos=document.getElementById("productos");
const verCarrito= document.getElementById("ver_carrito");
const modalContainer= document.getElementById("modal-container");


const seccionComentarios= document.getElementById("comentarios-alineados");
const comentarios = [
    { img: "./img/usuarios/usuario1.jpg ", nombre:"Ana Gómez",calficacion:5,oponion:"¡Me encantó todo! La ropa es aún más bonita que en las fotos, la calidad es increíble, y el equipo siempre está dispuesto a ayudarte. Sin duda vuelvo a comprar! "},
    { img: "./img/usuarios/usuario2.jpg", nombre:"Mariana López",calficacion:4,oponion:"El envío fue súper rápido y la atención al cliente es impecable. ¡Recomiendo 100%! "},
    { img: "./img/usuarios/usuario3.jpg ", nombre:"Valeria Ruiz",calficacion:5,oponion:"La calidad de la ropa es excelente y llegó justo a tiempo. ¡Muy satisfecha con la atención! "},
]
  
  let carrito = []; 


productos.forEach((productos)=>{
    let content=document.createElement("div");
    
    content.className= "card";

    content.innerHTML= `
    <img class="img_prod" src= "${productos.img}">
    <p class="titulo-art"> ${productos.nombre}</p>
    <span>$${productos.precio}</span>
    <p class="descripcion-cuotas"> ${productos.tarjeta}</p>
    `;   

 shopProductos.append(content);
 let cargarALcarrito=document.createElement("button")
 cargarALcarrito.innerText="Comprar"
 cargarALcarrito.className="comprar" 
 
 content.append(cargarALcarrito);

cargarALcarrito.addEventListener("click",()=>{
    carrito.push({
       id:productos.id,
       img: productos.img,
       nombre: productos.nombre,
       precio: productos.precio,
    });
   console.log(carrito);
  
})

})


// CARRITO
verCarrito.addEventListener("click",()=>{
const modalHeader= document.createElement("div")
modalHeader.className="modalHeader"
modalHeader.innerHTML=`
<h1 class= "modal-header-titulo">Carrito</h1>
`;
modalContainer.append(modalHeader);
const modalButton= document.createElement("h1")
modalButton.innerText="X";
modalButton.className="modal-header-button";

modalHeader.append(modalButton);

carrito.forEach((productos)=>{
    let carritoContent= document.createElement("div");
    carritoContent.className= "modal-content";
    carritoContent.innerHTML= `
    <div class = "modal-container-img-contador">
    <img class= "img-carrito" src="${productos.img}">
     <div class="img_descripcion">
              
    <h3> ${productos.nombre}</h3>
     <div class="fila-cantidad"><button>+</button>2
                <button>-</button>
            </div> 

            </div>
   
       
            </div>
                <i class="bi bi-trash3"></i>
    <p> $${productos.precio}</h3>

    
    `;
    modalContainer.append(carritoContent)

})
const total= carrito.reduce((acc, el)=> acc + el.precio,0);
const totalComprado= document.createElement("div");
totalComprado.className= "total-content";
totalComprado.innerHTML=`TOTAL A PAGAR $ ${total}`;

modalContainer.append(totalComprado);

})












/* pagina dinamica de detalle

function mostrarDetalles(productId){
    let producto=productos.find(p=> p.id == productId);
    if(producto){
    let detallesHtml=`
        <div class="detalle-modal">
                <h2>${producto.nombre}</h2>
                <img class="img_modal" src="${producto.img}" alt="${producto.nombre}">
                  <div> 
                <p><strong>Precio:</strong> $${producto.precio}</p>
                <p><strong>Detalles:</strong> ${producto.detalle || "Descripción no disponible"}</p>
                <p><strong>Tarjeta:</strong> ${producto.tarjeta}</p>
                
                <h3>Selecciona color:</h3>
                <div>
                    ${producto.colores.map(color => `
                        <label>
                            <input type="radio" name="color" value="${color}"> ${color}
                        </label>
                    `).join("")}
                </div>

                <h3>Selecciona talle:</h3>
                <div>
                    ${producto.talles.map(talle => `
                        <label>
                            <input type="radio" name="talle" value="${talle}"> ${talle}
                        </label>
                    `).join("")}
                </div>

                <button onclick="cerrarDetalles()">Cerrar</button>
            </div>`;
            document.querySelector("#detalle-producto").innerHTML = detallesHtml;
            document.querySelector("#detalle-producto").style.display = "block";
    }
}
function cerrarDetalles(){
    document.querySelector("#detalle-producto").style.display="none";
}*/

function generarEstrellas(cantidad) {
    let estrellas = "";
    for (let i = 1; i <= 5; i++) {
        estrellas += i <= cantidad ? '<span class="star filled">★</span>' : '<span class="star">☆</span>';
    }
    return estrellas;
}




// Agregar comentarios dinámicamente al HTML
comentarios.forEach((comentarios) => {
    const comentarioHTML = `
        <div class="customer-feedback-item">
            <img src="${comentarios.img}" alt="Foto de ${comentarios.img}" class="customer-feedback-photo">
            <div class="customer-feedback-content">
                <h3 class="customer-feedback-name">${comentarios.nombre}</h3>
                <div class="customer-feedback-rating">
                    ${generarEstrellas(comentarios.calficacion)}
                </div>
                <p class="customer-feedback-comment">${comentarios.oponion}</p>
            </div>
        </div>
    `;
  seccionComentarios.innerHTML+=comentarioHTML;
});

// generar pagina de detalle dinamicamente
document.addEventListener("click", function (event){
if(event.target.classList.contains("comprar")){
const btnComprar= event.target;

const nombre= btnComprar.dataset.nombre;
const img= btnComprar.dataset.img;
const precio= btnComprar.dataset.precio;
const tarjeta= btnComprar.dataset.tarjeta;
const detallle= btnComprar.dataset.detallle;
}
})


//SLIDER DE LA HOME
let sliderContainer= document.querySelector(".slider-container");
 let imagenes= sliderContainer.querySelectorAll("img");
let index= 0;
setInterval(() => {
    let porcentaje=index*-100;
    sliderContainer.style.transform= "translateX("+ porcentaje + "%)";
    index++;
    if(index >= imagenes.length){
        index=0;
    }
},3000);

//Menu hamburguesa
/*
const hamburguesa= document.querySelector('#menu-hamburguesa')
const enlaces= document.querySelector('#nav-links')
hamburguesa.addEventListener('click',()=>{
    enlaces.classList.toggle('show');

    if(enlaces.classList.contains('show')){
        enlaces.style.display= 'flex';
    }else{
        enlaces.style.display='none';
    }
})*/



