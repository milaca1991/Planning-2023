let title = document.querySelector("h1");
title.innerHTML = "Planeación 2023";


let footer = document.querySelector("div.footer");
footer.innerHTML = "Made with ♥ by Electroequipos";
let imgIntro = document.querySelector("img.img-intro");

let objEts1 = document.getElementById("boton1");
objEts1.textContent = "1. Generar más y mejores ventas";

let objEts1_1 = document.getElementById("boton1_1");
objEts1_1.textContent =
"1.1. Incrementar las ventas en linea de instrumentación";

let objEts1_2 = document.getElementById("boton1_2");
objEts1_2.textContent = "1.2. Incrementar las ventas en linea escolar";

let objEts1_3 = document.getElementById("boton1_3");
objEts1_3.textContent = "1.3. Incrementar las ventas en linea IES";

let objEts1_4 = document.getElementById("boton1_4");
objEts1_4.textContent = "1.4. Mejorar la rentabilidad en las ventas";

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


let zeroH2Element = h2Elements.item(8);
zeroH2Element.textContent = "Confianza";

let firstH2Element = h2Elements.item(9);
firstH2Element.textContent = "Orgullo";

let secondH2Element = h2Elements.item(10);
secondH2Element.textContent = "Relación";

let thirdH2Element = h2Elements.item(0);
thirdH2Element.textContent = "Cultura de servicio";

let forthH2Element = h2Elements.item(1);
forthH2Element.textContent = "Somos innovadores";

let fiveH2Element = h2Elements.item(2);
fiveH2Element.textContent = "Trabajamos en equipo";


let sixH2Element = h2Elements.item(3);
sixH2Element.textContent = "Actuamos con pasión";


let sevenH2Element = h2Elements.item(4);
sevenH2Element.textContent = "Orientados al logro de objetivos";


let eigthH2Element = h2Elements.item(5);
eigthH2Element.textContent = "Somos colaboradores integrales";


let nineH2Element = h2Elements.item(6);
nineH2Element.textContent = "Dispuestos al cambio";


let tenH2Element = h2Elements.item(7);
tenH2Element.textContent = "Confiamos en ti";




// let forthH2Element = h2Elements.item(4);
// forthH2Element.textContent = "Proyectos estratégicos 2023";

// let fifthH2Element = h2Elements.item(5);
// fifthH2Element.textContent = "Momentos mágicos";

// let sixthH2Element = h2Elements.item(6);
// sixthH2Element.textContent = "Transformación cultural";

// let sevenH2Element = h2Elements.item(7);
// sevenH2Element.textContent = "Seguridad de la información";

// console.log(h2Elements);

// let eigthH2Element = h2Elements.item(8);
// eigthH2Element.textContent = "Rebranding";

// let nineH2Element = h2Elements.item(9);
// nineH2Element.textContent = "CRM";

// let tenH2Element = h2Elements.item(10);
// tenH2Element.textContent = "Pendiente";





//elementos IMG
let imgElements = document.querySelectorAll("img");
console.log(imgElements);

let valueOne = imgElements.item(0);
valueOne.src = "/images/valor1.jpg";

let valueTwo = imgElements.item(1);
valueTwo.src = "/images/valor 2.jpg";

let valueTree = imgElements.item(2);
valueTree.src = "/images/valor3.jpg";

let strategicMap = imgElements.item(3);
strategicMap.src = "/images/mapa.png";

let imgMomas = imgElements.item(4);
imgMomas.src = "/images/imgMomas1.png";

let imgCultura = imgElements.item(5);
imgCultura.src = "/images/imgCultura.png";

let imgSeguridad = imgElements.item(6);
imgSeguridad.src = "/images/imgSeguridad.png";

let imgRebranding = imgElements.item(7);
imgRebranding.src = "/images/rebranding.png";

let imgCrm = imgElements.item(8);
imgCrm.src = "/images/crm.jpg";

//elementos P

let pElements = document.querySelectorAll("p");
console.log(pElements);

let zeroPelement = pElements.item(0);
zeroPelement.textContent =
"Bienvenidos al nuevo rumbo que tomaremos como organización ";

let firstPelement = pElements.item(1);
firstPelement.textContent =
"El compromiso de Electroequipos es proveer al sector educativo y empresarial soluciones integrales de enseñanza y para la industria en general, la más avanzada tecnología, poniendo al alcance de sus socios estratégicos las herramientas y procesos que formen y actualicen profesionales altamente competitivos en el mercado nacional e internacional";

let secondPelement = pElements.item(2);
secondPelement.textContent =
"Para el 2028 Electroequipos se consolidará como el primer proveedor de soluciones tecnológicas en el sector educativo y contará con reconocimiento en el sector industrial. A traves de la innovación y la constante busqueda de tendencias globales, Electroequipos seguirá diversificando su portafolio aportando a nuestra sociedad soluciones de enseñanza con estandares de calidad y poniendo al alcance de las instituciones educativas tecnologias de avanzada, asi mismo, seguira creciendo de manera sostenible logrando mayor cobertura, asi como su compromiso con la generacion de empleo calificado en el país";

let defP1element = pElements.item(3);
defP1element.textContent =
"Reflejada en nuestras actividades del día a día con nuestros clientes";

let prin1Pelement = pElements.item(4);
prin1Pelement.textContent =
"Entendemos que cada uno de nosotros aporta al logro de los objetivos y siempre estamos prestos a brindar el apoyo que se requiere para su cumplimiento";

let thirdPelement = pElements.item(11);
thirdPelement.textContent =
"hacia nuestros superiores y equipo de trabajo";

let forthPelement = pElements.item(12);
forthPelement.textContent =
"respecto a la empresa; de hacer lo que hacemos en donde lo hacemos";

let fivePelement = pElements.item(13);
fivePelement.textContent =
"la conexión e interacción con nuestro equipo de trabajo";


let sixPelement = pElements.item(14);
sixPelement.textContent =
"Proyectos alineados a objetivos que impactan de forma transversal a todas las áreas";



//elementos h3

let h3Elements = document.querySelectorAll("h3");
console.log(h3Elements);

let zeroH3Element = h3Elements.item(0);
zeroH3Element.textContent = "Nuestra misión";

let firstH3Element = h3Elements.item(1);
firstH3Element.textContent = "Nuestra visión";

let secondH3Element = h3Elements.item(2);
secondH3Element.textContent = "Los principios que estamos construyendo";

let threeH3Element = h3Elements.item(3);
threeH3Element.textContent = "Los valores que nos darán la fuerza";

// elemento span

let spanElements=document.querySelectorAll("span");
console.log(spanElements);

let defPrin1=spanElements.item(0);
defPrin1.textContent = "cliente externo: brindando un excelente servicio reflejado en nuestras actividades dia a dia"