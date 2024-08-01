const squareArray = document.getElementsByClassName("Squares");
const colors = ["green","blue","pink","red","yellow","skyblue"];
const defaultcolor = "rgb(128,128,128)";

for (const Square of squareArray){
    square.addEventlistener("mouseenter",() =>{
        const randonum = parseInt(Math.random() * colors.length);

    Square.style.background = colors[randonum];
    Square.style.transition ="background-color 0s ease";
    Square.style.boxshadow = "0px 0px 10px" + colors[randonum];
});
 Square.addEventlistener("mouseleave", () => {
    Square.style.background = defaultcolor;
    Square.style.transition = "background-color 2s ease";
    Square.style.boxshadow ="0px 0px 0px"; 

 });
}