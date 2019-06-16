console.log("we here");
window.addEventListener('load', ready);

let slideIndex = 1;

function ready(){
    console.log('running ready now');
    showDivs(slideIndex);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let x = document.getElementsByClassName("slides");
    console.log("showDivs has ran", x.length);    
    
    if(n > x.length){
        slideIndex = 1;
    }
    else if(n < 1){
        slideIndex = x.length;
    }

    for (let i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}