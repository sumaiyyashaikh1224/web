let box = document.getElementById("box");
//let colorArray = ["red", "blue","purple","green","yellow"];// Array of color

const changecolor = () => {
    const Random = parseInt(math.random () * 5);//Random number between 0-4

    box.style.backgroundColor = colorArray[randomNum];
};

changecolor();
