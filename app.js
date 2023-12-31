const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
const close = document.querySelector(".close");

menu.addEventListener("click", function(){
    console.log("")
    if (list.classList.contains("show")){
        list.classList.remove("show");
    }
    else{
        list.classList.add("show");
    }
})
close.addEventListener("click", function(){
    if (list.classList.contains("show")){
        list.classList.remove("show");
    }
})

// slider

const slides = document.querySelectorAll(".slide");
const  right = document.querySelector(".right");
const left = document.querySelector(".left");

slides.forEach(function (slide, index){
   slide.style.left = `${index * 100}%`;
});
let counter = 0;

left.addEventListener("click", function(){
    counter--;
    carousel();
})
right.addEventListener("click", function(){
    counter++;
    carousel();
})
function carousel(){

   if (counter <slides.length -1){
       right.style.display = "block";
    }
   else{
        right.style.display = "none";
    }
    if (counter > 0){
        left.style.display ="block";
    }
   else{
        right.style.display = "none";
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })

}

left.style.display = "none";