let blur= document.getElementById("blur");
let space = document.getElementById("spacing");
let color= document.getElementById("base");



blur.addEventListener("input", function(){
    document.getElementById("pic").style.filter=`blur(${blur.value}px)`;
});

space.addEventListener("input", function(){
    document.getElementById("pic").style.padding=`${space.value}px 0px 0px ${space.value}px`;
})

color.addEventListener("click", function(){
    document.body.style.background= `${color.value}`;
})