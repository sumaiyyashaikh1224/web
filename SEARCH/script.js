const search = document.getElementById("Search");
const btn = document.getElementById("btn");
 let openInput = true;

   btn.addEventListener("click", () => {
    if (openInput)  {
        search.style.width = "0";
        openInput = false;
 }   else{
    search.style.width = "100px";
    openInput = true;
 }

 });
   btn.addEventListener("click", input);
