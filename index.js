




for (var i =0;i<document.querySelectorAll("button").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var key = this.innerHTML;
        playSound(key);
        animate(key);
    });
}

document.addEventListener("keydown", function(event){
    var ke = event.key;
    playSound(ke);
    animate(ke);
});

function playSound(key){
    switch (key){
        case "w" : var crash = new Audio ("sounds/crash.mp3"); 
                    crash.play();
                break;
        case "a" : var crash = new Audio ("sounds/kick-bass.mp3"); 
                    crash.play();
                break;
        case "s" : var crash = new Audio ("sounds/snare.mp3"); 
                    crash.play();
                break;
        case "d" : var crash = new Audio ("sounds/tom-1.mp3"); 
                    crash.play();
                break;
        case "j" : var crash = new Audio ("sounds/tom-2.mp3"); 
                    crash.play();
                break;
        case "k" : var crash = new Audio ("sounds/tom-3.mp3"); 
                    crash.play();
                break;
        case "l" : var crash = new Audio ("sounds/tom-4.mp3"); 
                    crash.play();
                break;
    }
}

function animate(key){
        document.querySelector("."+key).classList.add("pressed");
        setTimeout(function (){
            document.querySelector("."+key).classList.remove("pressed");}, 100);
}