let navbar=document.querySelector(".navbar");
let shownav=document.querySelector(".shownav");

navbar.style.right="-300px";

shownav.addEventListener("click",function()
{
    if (navbar.style.right=="-300px") {
        navbar.style.right="0px";
        
        
    }
else
{
    navbar.style.right="-300px";
}


})