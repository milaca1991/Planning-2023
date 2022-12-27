
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
objEts1_1.textContent= "1.1. Incrementar las ventas en linea de instrumentación";

let objEts1_2=document.getElementById('boton1_2');
objEts1_2.textContent= "1.2. Incrementar las ventas en linea escolar";

let objEts1_3=document.getElementById('boton1_3');
objEts1_3.textContent= "1.3. Incrementar las ventas en linea IES";

let objEts1_4=document.getElementById('boton1_4');
objEts1_4.textContent= "1.4. Mejorar la rentabilidad en las ventas";



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


function mostrarOcultar(selector) {
  let element = document.querySelector(selector);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}






//pagina proyectos
//elementos H2
let h2Elements = document.querySelectorAll("h2");
console.log(h2Elements);

let titleS2= h2Elements.item(0);
titleS2.textContent = "Detalle estrategia";


let zeroH2Element = h2Elements.item(1);
zeroH2Element.textContent="Proyectos estratégicos 2023";

let firstH2Element = h2Elements.item(2);
firstH2Element.textContent="Momentos mágicos";


let secondH2Element = h2Elements.item(3);
secondH2Element.textContent="Transformación cultural";

let thirdH2Element = h2Elements.item(4);
thirdH2Element.textContent="Seguridad de la información";

console.log(h2Elements);

let forthH2Element = h2Elements.item(5);
forthH2Element.textContent="Rebranding";

let fifthH2Element = h2Elements.item(6);
fifthH2Element.textContent="CRM";

let sixthH2Element = h2Elements.item(7);
sixthH2Element.textContent="Pendiente";



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

let imgRebranding=imgElements.item(4);
imgRebranding.src="/images/rebranding.png";

let imgCrm=imgElements.item(5);
imgCrm.src="/images/crm.jpg";



//elementos P

let pElements = document.querySelectorAll("p");
console.log(pElements);

let firstPelement = pElements.item(1);
firstPelement.textContent="Proyectos alineados a objetivos que impactan de forma transversal a todas las áreas"


//pagina mapa



