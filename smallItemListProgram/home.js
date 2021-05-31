var popUpDiv = document.querySelector('.popUp');
const boxInfo = popUpDiv.getBoundingClientRect();
console.log(popUpDiv);
var id = 0;
var transformScaleValueX = 1;
var transformScaleValueY = 1;
var opacity = 0.0;
var allowPopUpToHide = false;
const screenWidth = document.documentElement.clientWidth;
popUpDiv.addEventListener('click' , initialDelay);
document.documentElement.addEventListener('mousedown' , hidePopUp);





// timer function 
function initialDelay(event)
{
    window.setTimeout(repeatEveryHalfFrame , 1000);
}


// loop function
function repeatEveryHalfFrame()
{
    id = window.setInterval(popUpEnlarging , 1);
}// end of function


// popUp utilities function
function popUpEnlarging()
{
    if(stopPopUp())
    {
        allowPopUpToHide = true;
        return;
    }// end of if 
    transformScaleValueX += 0.3;
    transformScaleValueY += 0.1;
    // opacity += 0.01;
    (opacity >= 0.3) ? (opacity = opacity) : (opacity += 0.01);
    popUpDiv.style.opacity = String(opacity);
    popUpDiv.style.transform = 'scale('+String(transformScaleValueX)+','+String(transformScaleValueY)+')';
    console.log("box width"+boxInfo.width)

}// end of function 

function stopPopUp()
{
    if(boxInfo.width*transformScaleValueX >= (0.50 * screenWidth))
    {
        console.log("this is running");
        window.clearInterval(id);
        transformScaleValueX = 1;
        transformScaleValueY = 1;
        opacity = 0.1;
        return true;
    }
    return false;
}// end of function

function hidePopUp()
{

    if(allowPopUpToHide){
        console.log("hello bro");
        popUpDiv.style.transform = 'scale('+String(transformScaleValueX)+','+String(transformScaleValueY)+')';
        popUpDiv.style.opacity = String(opacity);

    }
    
}
 
// console.log(boxInfo.width);
// console.log(0.5*screenWidth);
// console.log(boxInfo.width >= (0.5 * screenWidth));