const shopProductos=document.getElementById("productos");


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
 let abrirProducto=document.createElement("button")
 abrirProducto.innerText="Comprar"
 abrirProducto.className="ver_en_detalle"
 abrirProducto.dataset.id=productos.id;
 
 content.append(abrirProducto)

abrirProducto.addEventListener("click",(event)=>{
    let productId= event.target.dataset.id;
    mostrarDetalles(productId);
})

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
const hamburguesa= document.querySelector('#menu-hamburguesa')
const enlaces= document.querySelector('#nav-links')
hamburguesa.addEventListener('click',()=>{
    enlaces.classList.toggle('show');

    if(enlaces.classList.contains('show')){
        enlaces.style.display= 'flex';
    }else{
        enlaces.style.display='none';
    }
})

