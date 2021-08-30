// button

var len= document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
    
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    
    })
}
// keyboard
addEventListener("keydown", function(event){
    

var keyPressed=event.key;
makeSound(keyPressed);
buttonAnimation(keyPressed);
})

// func
function makeSound(keyPressed){

    switch(keyPressed){
        case "w":
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
    
        break;
        case "a":
            var kickBass= new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break;
        case "s":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "d":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "j":
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "k":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "l":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        default:
            console.log(buttonInnerHTML);

    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
    

}




















// document.querySelectorAll("button")[0].addEventListener("click", function(){
//     var audio= new Audio('sounds/crash.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[1].addEventListener("click", function(){
//     var audio= new Audio('sounds/kick-bass.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[2].addEventListener("click", function(){
//     var audio= new Audio('sounds/snare.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[3].addEventListener("click", function(){
//     var audio= new Audio('sounds/tom-1.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[4].addEventListener("click", function(){
//     var audio= new Audio('sounds/tom-2.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[5].addEventListener("click", function(){
//     var audio= new Audio('sounds/tom-3.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[6].addEventListener("click", function(){
//     var audio= new Audio('sounds/tom-4.mp3');
//     audio.play();
// })

// document.querySelectorAll("button")[0].addEventListener("click", handleClick)
// document.querySelectorAll("button")[1].addEventListener("click", handleClick)
// document.querySelectorAll("button")[2].addEventListener("click", handleClick)
// document.querySelectorAll("button")[3].addEventListener("click", handleClick)
// document.querySelectorAll("button")[4].addEventListener("click", handleClick)
// document.querySelectorAll("button")[5].addEventListener("click", handleClick)
// document.querySelectorAll("button")[6].addEventListener("click", handleClick)

// for(var i=0;i<7;i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function (){
//         var audio= new Audio('sounds/tom-1.mp3');
//         audio.play();
//     })
// }