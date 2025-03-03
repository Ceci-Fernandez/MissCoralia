const shopProductos=document.getElementById("productos");
const productos = [
    { id:1, img:"./img/accesorio/pexels-ashuphotography-1413420.jpg" ,nombre: "Aretes cascada turquesa", precio: 9000, tarjeta: "6 cuotas sin interés de $3.000" },
    { id:2, img:"./img/pantalones/pantalon_vestir.jpg" ,nombre: "pantalon ejecutivo milano", precio: 45000, tarjeta: "6 cuotas sin interés de $7.500" },
    { id:3, img:"./img/remeras/remera rosa.jpg" ,nombre: "Remeron oversided-Rosa", precio: 20000, tarjeta: "6 cuotas sin interés de $3.333,34" },
    { id:4, img:"img/pantalones/pexels-774990922-29503794.jpg" ,nombre: "Pantalón Wide Leg Urban", precio: 30000, tarjeta: "6 cuotas sin interés de $5.000" },
    { id:5, img:"./img/remeras/remera blanca.jpg" ,nombre: "Remera Blanca", precio: 54000, tarjeta: "6 cuotas sin interés de $9.000" },
    { id:6, img:"./img/remeras/remeron_floreado.jpg" ,nombre: "Vestido floreado", precio: 36000, tarjeta: "6 cuotas sin interés de $6.000" },
    { id:7, img:"./img/pantalones/pexels-godisable-jacob-226636-970374 (1).jpg" ,nombre: "Conjunto Riviera Chic", precio: 40000, tarjeta: "6 cuotas sin interés de $6.666,67" },
    { id:8, img:"./img/accesorio/pexels-badis-benkhelil-1135505371-27835298.jpg" ,nombre: "Cartera de mano", precio: 50000, tarjeta: "6 cuotas sin interés de $8.833,33" },
    { id:9, img:"./img/pantalones/pexels-marcus-silva-86421404-16624071.jpg" ,nombre: "Pantalon de lino rosa", precio: 60000, tarjeta: "6 cuotas sin interés de $10.000,00" } 
];
const comentarios = [
    { img: "./img/usuarios/usuario1.avif ", nombre:"Ana Gómez",calficacion:"",oponion:"¡Me encantó todo! La ropa es aún más bonita que en las fotos, la calidad es increíble, y el equipo siempre está dispuesto a ayudarte. Sin duda vuelvo a comprar! "},
    { img: "./img/usuarios/usuario2.avif ", nombre:"Mariana López",calficacion:"",oponion:"El envío fue súper rápido y la atención al cliente es impecable. ¡Recomiendo 100%! "},
    { img: "./img/usuarios/usuario3.avif ", nombre:"Valeria Ruiz",calficacion:"",oponion:"La calidad de la ropa es excelente y llegó justo a tiempo. ¡Muy satisfecha con la atención! "},
    
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
 abrirProducto.innerText="Ver más..."
 abrirProducto.className="ver_en_detalle"

 content.append(abrirProducto)
})

function generarEstrellas(cantidad) {
    let estrellas = "";
    for (let i = 1; i <= 5; i++) {
        estrellas += i <= cantidad ? '<span class="star filled">★</span>' : '<span class="star">☆</span>';
    }
    return estrellas;
}
 // Obtener el contenedor de comentarios en el HTML
const listaComentarios = document.querySelector(".customer-feedback-list");

// Agregar comentarios dinámicamente al HTML
comentariosClientes.forEach(cliente => {
    const comentarioHTML = `
        <div class="customer-feedback-item">
            <img src="${cliente.foto}" alt="Foto de ${cliente.nombre}" class="customer-feedback-photo">
            <div class="customer-feedback-content">
                <h3 class="customer-feedback-name">${cliente.nombre}</h3>
                <div class="customer-feedback-rating">
                    ${generarEstrellas(cliente.calificacion)}
                </div>
                <p class="customer-feedback-comment">${cliente.comentario}</p>
            </div>
        </div>
    `;

    listaComentarios.innerHTML += comentarioHTML;
});


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

