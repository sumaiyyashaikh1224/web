const hamburger = document.getElementsByClassName
("hamburger-")[0];
const menu = document.getElementById("menu");
hamburger.addEventListener("click",() =>{
    if (menuopen){
        menu.style.width = "40px";
        menuopen = false;
    }else{
        menu.style.width ="200px";
        menuopen = true;
        hamburger. style.position ="relative";
        lines[o].style.rotate ="45deg";
        lines[o].style.position ="absolute";
        lines[1].style.display ="none";
        lines[2].style.rotate ="45deg";
        lines[2].style.position ="absolute";
    }
   });
