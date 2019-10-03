window.addEventListener("keydown", logKey);

function logKey(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
    console.log(key.classList);
    
}

window.addEventListener("keyup", function(e){
    let key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("playing");
    console.log(key.classList);
}

)