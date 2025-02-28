const productos=[
    {
        id:1,
        nombre:""
    }
]


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

