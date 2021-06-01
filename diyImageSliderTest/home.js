// fuck this is going a bloodbath
var outline = document.querySelector('.outline');
var outlineRectX = outline.getBoundingClientRect().x;

var progressBar = document.querySelector('.progressBar');
var progressBarRect = progressBar.getBoundingClientRect();

var nozzle = document.querySelector('.nozzle');
var nozzleRectX = nozzle.getBoundingClientRect().x;



var travelLength = nozzleRectX - outlineRectX;

var id = 0;



//crackhead pls kill me

var travelled = 0;
var flag = true;


// nozzle.addEventListener('mousedown' , repeatFrame);
// nozzle.addEventListener('mouseup' , stopTimer);



// function mouseDownEvent(event)
// {
//     console.log("mouse done event function");
//     console.log(getClientX(event));

// }// end of fucntion 



//  for getting client x
function getClientX(event)
{
    return event.clientX;
}// end of function



// for starting timer and prior calculations

function repeatFrame(event)
{
    let mousePositionScreen = getClientX(event);
    let nozzlePosition = nozzle.getBoundingClientRect().x;
    travelled = 0;
    

    if(mousePositionScreen < nozzlePosition)
    {
        travelled = nozzlePosition - mousePositionScreen;
        // nozzle.style.left = travelLength - travelled;
    }// end of function

    id = window.setInterval(moveNozzle , 16.7);
}// end of function


// for stopping timer
function stopTimer()
{
    window.clearInterval(id);
}// end of function



// function test()
// {
//     console.log("this is a test");
// }


function moveNozzle()
{
    if(flag)
    {
        nozzle.style.left = travelLength - travelled;

    }else if (!flag)
    {

    }//  end of if

}// end of function


