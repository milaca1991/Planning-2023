let title = document.querySelector("h1");
title.innerHTML = "Planeación 2023";


let footer = document.querySelector("div.footer");
footer.innerHTML = "Made with ♥ by Electroequipos";
let imgIntro = document.querySelector("img.img-intro");

let objEts1 = document.getElementById("boton1");
objEts1.textContent = "1. Generar más y mejores ventas";

let objEts2 = document.getElementById("boton2");
objEts2.textContent = "2. Maximizar los recursos para el crecimiento del valor de la compañía";

let objEts3 = document.getElementById("boton3");
objEts3.textContent = "3. Mantener el margen operativo mínimo al 30% ";


let objEts1_1 = document.getElementById("boton1_1");
objEts1_1.textContent =
"1.1. Incrementar las ventas en linea de instrumentación";

let objEts1_2 = document.getElementById("boton1_2");
objEts1_2.textContent = "1.2. Incrementar las ventas en linea escolar";

let objEts1_3 = document.getElementById("boton1_3");
objEts1_3.textContent = "1.3. Incrementar las ventas en linea en educación superior";

let objEts1_4 = document.getElementById("boton1_4");
objEts1_4.textContent = "1.4. Mejorar la rentabilidad en las ventas";

let objEts2_1 = document.getElementById("boton2_1");
objEts2_1.textContent = "2.1. Mantener un Margen Bruto de mínimo 55% en el 70% del valor del presupuesto anual de ventas y facturación";


let objEts2_2 = document.getElementById("boton2_2");
objEts2_2.textContent = "2.2. Aumentar la rotación de inventario en líneas con stock a 3 veces por año";


let objEts3_1 = document.getElementById("boton3_1");
objEts3_1.textContent = "3.1. Optimizar el gasto administrativo";


let objEts3_2 = document.getElementById("boton3_2");
objEts3_2.textContent = "3.2.  Optimizar el gasto de distribución y venta";



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

let titleObjetives = h2Elements.item(11);
titleObjetives.textContent = "Desglose de los Objetivos estratégicos";

let titleProjects = h2Elements.item(12);
titleProjects.textContent = "Proyectos y planes que apalancarán la estrategia";

let titleBSC = h2Elements.item(13);
titleBSC.textContent = "Cuadro de mando";

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
imgMomas.src = "/images/OT CAMILA_Mesa de trabajo 1-02.png";

let bsc = imgElements.item(5);
 bsc.src = "/images/DETALLE DE INDICADORES 2023.png";
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
"Reflejada en nuestras actividades del día a día";

let tooltip1 = pElements.item(4);
tooltip1.textContent =
"Cada uno de nosotros aporta al logro de objetivos y siempre estamos prestos a brindar el apoyo que se requiere";

let defP2Pelement = pElements.item(5);
defP2Pelement.textContent =
"Fomentamos la creatividad y la disrupción para mantenernos a la vanguardia";

let tooltip2 = pElements.item(6);
tooltip2.textContent =
"Proponemos, concretamos y aplicamos las ideas. Asi como aceptamos diferentes opiniones";  

let defP3Pelement = pElements.item(7);
defP3Pelement.textContent =
"Tenemos metas en común y entendemos que el éxito personal solo se logrará mediante el éxito de todo el equipo";

let tooltip3 = pElements.item(8);
tooltip3.textContent =
"Construimos y solucionamos en equipo . Frente a problemas no buscamos el ¿quien?, sino el ¿cómo? y ¿por qué? ";

let defP4Pelement = pElements.item(9);
defP4Pelement.textContent =
"Nos retamos y disfrutamos lo que hacemos, construimos empresa y trabajadores felices";

let tooltip4 = pElements.item(10);
tooltip4.textContent =
"Inspiramos a nuestros clientes, reflejando la pasión por lo que hacemos";

let defP5Pelement = pElements.item(11);
defP5Pelement.textContent =
"Trazamos objetivos, planeamos y nos retamos";

let tooltip5 = pElements.item(12);
tooltip5.textContent =
" Recopilamos información veraz y confiable. Entendemos que la medición es el medio para alcanzar los objetivos";

let defP6Pelement = pElements.item(13);
defP6Pelement.textContent =
"Calidad en nuestras soluciones y prácticas, con autocuidado y minizando impacto ambiental";

let tooltip6 = pElements.item(14);
tooltip6.textContent =
" Desempeñamos nuestra labor orientados a la satisfacción de nuestros clientes";

let defP7Pelement = pElements.item(15);
defP7Pelement.textContent =
"Construimos en equipo y eliminamos las barreras que se presenten, para conseguir éxito en los procesos de transformación";

let tooltip7 = pElements.item(16);
tooltip7.textContent =
"Nos gusta iniciar el cambio o formar parte del cambio";


let defP8Pelement = pElements.item(17);
defP8Pelement.textContent =
"Tus líderes y compañeros, viven las relaciones laborales fomentando la confianza";
let tooltip8 = pElements.item(18);
tooltip8.textContent =
"Estamos seguros de tu potencial";




let thirdPelement = pElements.item(19);
thirdPelement.textContent =
"hacia nuestros superiores y equipo de trabajo";

let forthPelement = pElements.item(20);
forthPelement.textContent =
"respecto a la empresa; de hacer lo que hacemos en donde lo hacemos";

let fivePelement = pElements.item(21);
fivePelement.textContent =
"la conexión e interacción con nuestro equipo de trabajo";





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

let op1obj1=spanElements.item(0);
op1obj1.textContent="1.1.1. Incorporar 5 distribuidores con compras superiores a 40 millones por Q"

let op2obj1=spanElements.item(1);
op2obj1.textContent="1.1.2. Incrementar la facturación en distribuidores actuales";

let op3obj1=spanElements.item(2);
op3obj1.textContent="1.2.1. Generar un pipeline por un valor de 2 mil 500 millones de pesos en linea escolar y lograr una efectividad del 40%";

let op4obj1=spanElements.item(3);
op4obj1.textContent="1.2.2. Incrementar las cantidad en clientes nuevos en linea escolar";

let op5obj1=spanElements.item(4);
op5obj1.textContent="1.3.1. Alcanzar el 0.5% en participación sobre la meta de ventas en linea de Mantenimiento";

let op6obj1=spanElements.item(5);
op6obj1.textContent="1.3.2. Lograr la cobertura en gestión de cuentas al 100%";

let op7obj1=spanElements.item(6);
op7obj1.textContent="1.3.3. Incrementar la cantidad de clientes por recompra en linea de IES";

let op8obj1=spanElements.item(7);
op8obj1.textContent="1.3.4. Incrementar la cantidad de clientes nuevos en linea de IES";


let op9obj1=spanElements.item(8);
op9obj1.textContent="1.4.1. Lograr oportunidades en marcas propias por 23 mil millones y lograr una efectividad del 40%";

let op1obj2=spanElements.item(9);
op1obj2.textContent="2.1.1. Ser eficientes en la estructuración de los proyectos";

let op2obj2=spanElements.item(10);
op2obj2.textContent="2.1.2. Incrementar al 70% la participación de marcas propias en las ventas";

let op3obj2=spanElements.item(11);
op3obj2.textContent="2.1.3. Incrementar la facturación de las marcas que generan una rentabilidad superior al 60 %";

let op4obj2=spanElements.item(12);
op4obj2.textContent="2.1.4. Mantener en 17% el gasto logístico";

let op5obj2=spanElements.item(13);
op5obj2.textContent="2.1.5. Ser eficientes en la negociación con proveedores que permita negociar mejores plazos y descuentos";

let op6obj2=spanElements.item(14);
op6obj2.textContent="2.2.1. Mejorar la estimacion de la demanda para mantener un stock óptimo ";


