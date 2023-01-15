const cont = document.getElementById("container");
cont.addEventListener('click',() => {   
    cont.id = "conteinerup";
})

const rabbit = document.querySelector(".rabbit");
const pigeon = document.querySelector(".pigeon");
rabbit.addEventListener("click", () => {
    pigeon.style.display='block';
    rabbit.classList.remove("moves_up");
    rabbit.classList.add("moves_down");
    setTimeout(() => {
        pigeon.classList.add("moves_up");
      }, 250);
    
  });
pigeon.addEventListener("click", () => {
    rabbit.style.display='block';
    pigeon.classList.remove("moves_up");
    pigeon.classList.add("moves_down");
    setTimeout(() => {
        rabbit.classList.remove("moves_down");
        rabbit.classList.add("moves_up");
      }, 250);
    
  });

const fairy = document.getElementById("fairy");
const focus = document.getElementById("focus");
const light = document.querySelector(".light");
const lamp = document.getElementById("lamp");
lamp.addEventListener("click", () => {
    if(light.classList.contains("light_on")){
        light.classList.remove("light_on");
        light.classList.add("light_off");
        focus.style.display='none';
        fairy.style.display='none';
    }
    else{
        
        light.classList.remove("light_off");
        light.classList.add("light_on");
        focus.style.display='block';
        fairy.style.display='block'; 
    }
} )