$('button').click(function(){
    character(this.innerHTML);
    keyPressed(this.innerHTML);
})
$(document).keydown(function(event){
    character(event.key);
    keyPressed(event.key);
})

function character(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio('./sounds/tom-5.mp3');
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio('./sounds/tom-6.mp3');
            tom6.play();
            break;
        case "l":
            var tom7 = new Audio('./sounds/tom-7.mp3');
            tom7.play();
            break;
    
        default:
            break;
    }
}
function keyPressed(key){
    $('.'+key).addClass('pressed');
    setTimeout(function(){
        $('.'+key).removeClass('pressed');
    },100)
}