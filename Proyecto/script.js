//* variables//*
const parrafo1 = document.querySelector(".parrafo1")
const title = document.querySelector(".primero")
let lista = document.querySelector(".lista")
let lista2 = document.querySelector(".lista2")
let lista3 = document.querySelector(".lista3")
title.textContent = "Explora"; 

let btn = document.querySelector(".btn")
btn.addEventListener("click" , function(){
    title.textContent ="Descubre";
    parrafo1.style.color = "red"
    lista.style.color="blue"
    lista2.style.color="green"
    lista3.style.color="red"
    

  
})

