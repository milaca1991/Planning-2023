let title= document.querySelector('h1');
title.innerHTML= "Planeación 2023";

let introTitle= document.querySelector('p.text-intro');
introTitle.innerHTML= "Bienvenidos al nuevo rumbo que tomará que tomaremos como organización ";

let footer = document.querySelector('div.footer');
footer.innerHTML = "Made with ♥ by Electroequipos";

let imgIntro= document.querySelector('img.img-intro');
imgIntro.setAttribute('src',/images/img-intro.png);

document.setAttribute('title', 'Planeación 2023');

let divPadre = document.getElementById("divPadre");
  let divHijo = document.getElementById("divHijo");


  button.onclick="toggleVisibility('miElemento')"


  function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }