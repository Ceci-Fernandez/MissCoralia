const slider= document.getElementById("slider")

const imagen= document.createElement("img")
imagen.src="/img/iconos/banner-1.webp"

slider.appendChild(imagen)

const container= document.getElementById("productos")

productos.forEach(producto => {
const div = document.createElement("div")
div.classList.add("producto")
div.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}">
    <p class="nombre-producto">${producto.nombre}</p>
    <span class="precio-producto">$${producto.precio}</span>
  `;

  div.addEventListener("click",function(){
  window.location.href=`detallePrenda.html?id=${producto.id}`
})
container.appendChild(div)

});


const comentariosUsuario=document.getElementById("comentarios-alineados")
const comentarios=[{nobreUsuario:"Maria Martinez",img:"/img/usuarios/usuario1.jpg",comentario:"Excelente calidad y envío rapidísimo. Me sorprendió lo bien empaquetado que llegó todo. ¡Recomiendo 100%!", puntuacion:"⭐⭐⭐⭐⭐"},
    {nobreUsuario:"Belen Pereira",img:"/img/usuarios/usuario2.jpg",comentario:"Muy buena atención al cliente. Me ayudaron enseguida con una duda y el producto llegó tal cual la foto.", puntuacion:"⭐⭐⭐⭐⭐"},
    {nobreUsuario:"Lorena Paz",img:"/img/usuarios/usuario3.jpg",comentario:"Los productos son hermosos y cómodos. Sin dudas voy a volver a comprar. Gracias por todo 💖", puntuacion:"⭐⭐⭐⭐"},
    {nobreUsuario:"Pamela Gonzalez",img:"/img/usuarios/usuario4.jpg",comentario:"Todo perfecto, desde la compra hasta la entrega. Me encantó la presentación, se nota el cuidado en los detalles.", puntuacion:"⭐⭐⭐⭐⭐"}   
]

comentarios.forEach(comentario =>{
    const usuario=document.createElement("div")
    usuario.classList.add("comentario")
    usuario.innerHTML=`
     <img src= ${comentario.img}>
   <div class="usuario">
        <p class="nombre-usuario">${comentario.nobreUsuario}</p>
        <span>${comentario.puntuacion}</span>
        </div>
        <p class="caja-comentario">${comentario.comentario}</p>`
    
        comentariosUsuario.appendChild(usuario)
             
} )

