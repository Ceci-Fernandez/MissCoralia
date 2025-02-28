const shopProductos=document.getElementById("productos");
const productos = [
    { id:1, img:"./img/accesorio/pexels-ashuphotography-1413420.jpg" ,nombre: "aretes cascada turquesa", precio: 9000, tarjeta: "6 cuotas sin interés de $3.000" },
    { id:2, img: ,nombre: "pantalon ejecutivo milano", precio: 45000, tarjeta: "6 cuotas sin interés de $7.500" },
    { id:3, img: ,nombre: "Remeron oversided-Rosa", precio: 20000, tarjeta: "6 cuotas sin interés de $3.333,34" },
    { id:4, img: ,nombre: "Pantalón Wide Leg Urban", precio: 30000, tarjeta: "6 cuotas sin interés de $5.000" },
    { id:5, img: ,nombre: "Bolso YSL Elegance", precio: 54000, tarjeta: "6 cuotas sin interés de $9.000" },
    { id:6, img: ,nombre: "Vestido floreado", precio: 36000, tarjeta: "6 cuotas sin interés de $6.000" },
    { id:7, img: ,nombre: "Conjunto Riviera Chic", precio: 40000, tarjeta: "6 cuotas sin interés de $6.666,67" }
  ];
  
  let carrito = [];

/*<div class="producto">
<img src="./img/accesorio/pexels-ashuphotography-1413420.jpg" alt="">
<p class="titulo-art"> Aretes Cascada Turquesa</p>
<span>$9.000</span>
<p class="descripcion-cuotas">3 cuotas sin inrés de $3.000</p>
</div>*/
productos.forEach((productos)=>{
    let content=document.createElement("div");
    content.innerHTML= `
    <img src= "${productos.}">
    <p> ${productos.nombre}</p>
    <span>${productos.precio}$</span>
    <p> ${productos.tarjeta}</p>
    `;   

 shopProductos.append(content)
})


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

