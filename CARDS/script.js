let imags = document.getElementsByClassName("img");
let active = document.getElementsByClassName("active")[0];
// console.log(active);for (const img of imags){

for(const img of imags) { 
    console.log(img);
    img.addEventListener("click", () =>{
        active.classList.remove("active");
        img.classList.add("active");
        active = img
    });
}