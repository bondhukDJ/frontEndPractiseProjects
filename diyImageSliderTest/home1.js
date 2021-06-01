




// all the selector
var outline = document.querySelector('.outline');
var outlineRectX = outline.getBoundingClientRect().x;
var nozzle = document.querySelector('.nozzle');
var nozzlePositionX = nozzle.getBoundingClientRect().x;
var outlinePositionXRight = outline.getBoundingClientRect().right;
var progressBar = document.querySelector('.progressBar');

const maxTravel = nozzlePositionX - outlineRectX;

let maxTravelLet = maxTravel;
var allowSlide = false;


// mouse coordinates
var mouseX = 0;
var mouseY = 0;


// timer id 
var id = 0;




// second plan fuck 
var keyPress = 'neutral';



// all event listeners
// document.documentElement.addEventListener('mousemove' , getCords);
document.documentElement.addEventListener('keydown' , event => 
{
    keyPress = event.code;

});



function repeatFrame()
{
    console.log(keyPress);
    // console.log(maxTravel);
    if(keyPress === 'ArrowLeft')
    {
        
        console.log("is this working brah");
        maxTravelLet -= 3;

        if(maxTravelLet > maxTravel || maxTravelLet >= 0)
        {
            nozzle.style.left = String(maxTravelLet)+'px';
            progressBar.style.width = String(maxTravelLet)+'px';
        }// end of if
        
    

    }else if (keyPress === 'ArrowRight')
    {
        maxTravelLet += 3;

        if((maxTravelLet+outlineRectX) <= outlinePositionXRight )
        {
            nozzle.style.left = String(maxTravelLet)+'px';
            progressBar.style.width = String(maxTravelLet)+'px';
        }// end of if

    }else
    {

    }// end of if

    keyPress = 'neutral';


}



// maxTravelLet = '30px';
// nozzle.style.left = maxTravelLet;
window.setInterval(repeatFrame , 16.7);




























/*
big fail life is really 

nozzle.addEventListener('mousedown' , mousePress);
nozzle.addEventListener('mouseoup' , mousePress);






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
    calculateTravelDistance(nozzlePositionX);
    nozzlePositionX = nozzle.getBoundingClientRect().x;
}


// adding a timer 
function timer(){
    id = window.setInterval(repeatFrame , 16.7 );
    
}

// how much to travel
function calculateTravelDistance(nozzlePosX)
{
    let travel = nozzlePosX - mouseX;
    if(travel <= 0)
    {
        maxTravelLet -= travel
        if(maxTravelLet > maxTravel || maxTravelLet >= 0)
        {
            nozzle.style.transform.left = String(maxTravelLet)+'px';
        }// end of if
        
    }else if(travel >0)
    {

    }// end of if
}// end of function


function mousePress()
{
    allowSlide = !allowSlide;
}
*/



// basically type of a game loop

// timer();