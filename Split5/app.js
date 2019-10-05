const container= document.querySelector(".container");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

one.addEventListener("mouseenter", () => {
    container.classList.add("hover-one");
    
});

one.addEventListener("mouseleave", () => {
    container.classList.remove("hover-one");
});

two.addEventListener("mouseenter", () => {
    container.classList.add("hover-two");
});

two.addEventListener("mouseleave", () => {
    container.classList.remove("hover-two");
});

three.addEventListener("mouseenter", () => {
    container.classList.add("hover-three");
});

three.addEventListener("mouseleave", () => {
    container.classList.remove("hover-three");
});

four.addEventListener("mouseenter", () => {
    container.classList.add("hover-four");
});

four.addEventListener("mouseleave", () => {
    container.classList.remove("hover-four");
});