
let title= document.querySelector('h1');
title.innerHTML= "Planeación 2023";

let introTitle= document.querySelector('p.text-intro');
introTitle.innerHTML= "Bienvenidos al nuevo rumbo que tomaremos como organización ";

let footer = document.querySelector('div.footer');
footer.innerHTML = "Made with ♥ by Electroequipos";

let imgIntro= document.querySelector('img.img-intro');

let objEts1=document.getElementById('boton1');
objEts1.textContent= "1. Generar más y mejores ventas";


let objEts1_1=document.getElementById('boton1_1');
objEts1_1.textContent= "1.1. Incrementar las ventas en canal IES";



//functions hide and show for class

function toggleVisibility(className) {
  let elements = document.getElementsByClassName(className.substring(1));
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.display === "none") {
      elements[i].style.display = "block";
    } else {
      elements[i].style.display = "none";
    }
  }
}

toggleVisibility("miElemento");

function toggleVisibility(className) {
  let elements = document.getElementsByClassName(className.substring(1));
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.display === "none") {
      elements[i].style.display = "block";
    } else {
      elements[i].style.display = "none";
    }
  }
}

toggleVisibility("miElemento1");
















//pagina proyectos
//elementos H2
let h2Elements = document.querySelectorAll("h2");


let zeroH2Element = h2Elements.item(0);
zeroH2Element.textContent="Proyectos estratégicos 2023";

let firstH2Element = h2Elements.item(1);
firstH2Element.textContent="Momentos mágicos";


let secondH2Element = h2Elements.item(2);
secondH2Element.textContent="Transformación cultural";

let thirdH2Element = h2Elements.item(3);
thirdH2Element.textContent="Seguridad de la información";

//elementos IMG
let imgElements = document.querySelectorAll("img");
console.log(imgElements);

let strategicMap=imgElements.item(0);
strategicMap.src="/images/mapa.png";

let imgMomas=imgElements.item(1);
imgMomas.src="/images/imgMomas1.png";

let imgCultura=imgElements.item(2);
imgCultura.src="/images/imgCultura.png";

let imgSeguridad=imgElements.item(3);
imgSeguridad.src="/images/imgSeguridad.png";



//elementos P

let pElements = document.querySelectorAll("p");
console.log(pElements);

let firstPelement = pElements.item(1);
firstPelement.textContent="Proyectos alineados a objetivos que impactan de forma transversal a todas las áreas"


