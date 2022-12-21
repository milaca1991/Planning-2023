let title= document.querySelector('h1');
title.innerHTML= "Planeación 2023";

let introTitle= document.querySelector('p.text-intro');
introTitle.innerHTML= "Bienvenidos al nuevo rumbo que tomará que tomaremos como organización ";

let footer = document.querySelector('div.footer');
footer.innerHTML = "Made with ♥ by Electroequipos";

let imgIntro= document.querySelector('img.img-intro');
imgIntro.setAttribute('src',/images/img-intro.png);

document.setAttribute('title', 'Planeación 2023');




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