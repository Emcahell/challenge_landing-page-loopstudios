//---------- BOTON MENU DESPLEGABLE
const btnPanel = document.getElementById("btn-panel");
const panel = document.getElementById("panel");

const open = document.getElementById("open");
const close = document.getElementById("close");

btnPanel.addEventListener("click", () =>{
  panel.classList.toggle("active"); 
  
  if (close.classList.contains("none")){
    close.classList.remove("none");
    open.classList.add("none");
  } else {
    close.classList.add("none");
    open.classList.remove("none");
  }
})

//---------------- Hover Divs

const hoverDivs = document.querySelectorAll('.creation');

hoverDivs.forEach((div) => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    div.appendChild(overlay);
  
    div.addEventListener('mouseenter', () => {
      overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.664)';
      const text = div.querySelector('p');
      text.style.color = 'black';
    });
  
    div.addEventListener('mouseleave', () => {
      overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      const text = div.querySelector('p');
      text.style.color = 'white';
    });
  });