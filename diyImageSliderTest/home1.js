




// mouse coordinates
var mouseX = 0;
var mouseY = 0;


// timer id 
var id = 0;


// all event listeners
document.documentElement.addEventListener('mouseover' , getCords);
var nozzle = document.querySelector('.nozzle');
nozzle.addEventListener('click' , timer)





//function returns the mouse coordinates
function getCords(event)
{

    mouseX = event.clientX;
    mouseY = event.clientY;
}

// function repeated every frame by the window timer
function repeatFrame()
{
    console.log("mouseX "+ mouseX);
}


// adding a timer 
function timer(){
    id = window.setInterval(repeatFrame , 33.4 );
}