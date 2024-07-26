const current=document.querySelector("#current");
const imgs=document.querySelector(".imgs");
const img=document.querySelectorAll(".imgs img");

let opacity = 0.6;

img[0].style.opacity = opacity;

imgs.addEventListener("click",(event)=>{
    console.log(event);
    img.forEach((img)=>{img.style.opacity=1})
    current.src = event.target.src
    current.classList.add("fade-in")
    event.target.style.opacity = opacity
}
)   