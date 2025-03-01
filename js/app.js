const shopProductos=document.getElementById("productos");
const productos = [
    { id:1, img:"./img/accesorio/pexels-ashuphotography-1413420.jpg" ,nombre: "aretes cascada turquesa", precio: 9000, tarjeta: "6 cuotas sin interés de $3.000" },
    { id:2, img:"./img/pantalon_vestir.jpg" ,nombre: "pantalon ejecutivo milano", precio: 45000, tarjeta: "6 cuotas sin interés de $7.500" },
    { id:3, img:"./img/remeras/remera rosa.jpg" ,nombre: "Remeron oversided-Rosa", precio: 20000, tarjeta: "6 cuotas sin interés de $3.333,34" },
    { id:4, img:"img/pantalones/pexels-774990922-29503794.jpg" ,nombre: "Pantalón Wide Leg Urban", precio: 30000, tarjeta: "6 cuotas sin interés de $5.000" },
    { id:5, img:"./img/remeras/remera blanca.jpg" ,nombre: "Bolso YSL Elegance", precio: 54000, tarjeta: "6 cuotas sin interés de $9.000" },
    { id:6, img:"./img/remeras/remeron_floreado.jpg" ,nombre: "Vestido floreado", precio: 36000, tarjeta: "6 cuotas sin interés de $6.000" },
    { id:7, img:"./img/pantalones/pexels-godisable-jacob-226636-970374.jpg" ,nombre: "Conjunto Riviera Chic", precio: 40000, tarjeta: "6 cuotas sin interés de $6.666,67" }
  ];
  
  let carrito = [];

/*
        <section class="productos">
            <div class="producto">
                <img src="./img/accesorio/pexels-ashuphotography-1413420.jpg" alt="">
                <p class="titulo-art"> Aretes Cascada Turquesa</p>
                <span>$9.000</span>
                <p class="descripcion-cuotas">3 cuotas sin inrés de $3.000</p>

          </div>
            <div class="producto">
                <img src="./img/pantalon_vestir.jpg" alt="">
                <p class="titulo-art"> Pantalón Ejecutivo Milano</p>
                <span>$45.000</span>
                <p class="descropcion-cuotas">6 cuotas sin interés de $7.500</p>

            </div>

            <div class="producto">
                <img src="./img/remeras/remera rosa.jpg" alt="">
                <p class="titulo-art"> Remeron oversided-Rosa</p>
                <span>$20.000</span>
                <p class="descropcion-cuotas">6 cuotas sin interés de $3.333,34</p>

            </div>
            <div class="producto">
                <img src="img/pantalones/pexels-774990922-29503794.jpg" alt="">
                <p class="titulo-art"> Pantalón Wide Leg Urban</p>
                <span>$30.000</span>
                <p class="descropcion-cuotas">6 cuotas sin interés de $5.000</p>

            </div>
            <div class="producto">
                <img src="./img/remeras/remera blanca.jpg" alt="">
                <p class="titulo-art"> Camiseta Essential Blanca</p>
                <span class= "precio_prod">$25.000</span>
                <p class="descropcion-cuotas">6 cuotas sin interés de $4.166,67</p>
            </div>

            <div class="producto">
                <img src="./img/remeras/remeron_floreado.jpg" alt="">
                <p class="titulo-art">Bolso YSL Elegance</p>
                <span>$54.000</span>
                <p class="descropcion-cuotas">6 cuotas sin interés de $9.000</p>
            </div>
            <div class="producto">
                <img src="./img/pantalones/pexels-godisable-jacob-226636-970374.jpg" alt="">
                <p class="titulo-art"> Vestido floreado</p>
                <span>$36.600</span>
                <p class="descropcion-cuotas">6 cuotas sin interés de $6.000</p>

            </div>
            <div class="producto">
                <img src="./img/accesorio/pexels-badis-benkhelil-1135505371-27835298.jpg" alt="">
                <p class="titulo-art">Conjunto Riviera Chic</p>
                <span>$40.000</span>
                <p class="descropcion-cuotas">6 cuotas sin interés de $6.666,67</p>

            </div>*/
productos.forEach((productos)=>{
    let content=document.createElement("div");
    content.innerHTML= `
    <img class="img_prod" src= "${productos.img}">
    <p class="titulo-art"> ${productos.nombre}</p>
    <span>${productos.precio}$</span>
    <p class="descropcion-cuotas"> ${productos.tarjeta}</p>
    `;   

 shopProductos.append(content);
 let abrirProducto=document.createElement("button")
 abrirProducto.innerText="Ver más."

 content.append(abrirProducto)
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

