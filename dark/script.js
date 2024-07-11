let box = document.getElementById("BOX");

box.addEventListener("click",() =>{
    let styleFile = document.getElementByIdTagName("link")[0]
    console.log(styleFile);
    if (styleFile.href == "style.css"){
        styleFile.href = "style.css";
    }else{
        styleFile.href ="style.css";
    }
});