var testWindow = document.querySelector('.container');
var testWindowDimensions = testWindow.getBoundingClientRect();
var sideBar = document.querySelector('.experiment');
var sideBarDimensions = sideBar.getBoundingClientRect();
var menuButton = document.querySelector('#sideBarMenu');
var transformX = 0;
var finalWidth = 0.3 * testWindowDimensions.width;
var id = 0;
var mouseHoverFlag = false;
//menuButton.addEventListener('click' , repeatFrame);
menuButton.addEventListener('mouseover' , mouseHover);
menuButton.addEventListener('mouseout' , mouseOut);





// timer function

function repeatFrame()
{
	
	id = window.setInterval(sideBarMovement , 16.7);
	
}


// function to move the sideBar
function moveSideBarOut()
{
	//console.log("working?");
	if(transformX <= finalWidth)
	{
		transformX++;	
	}else if (transformX >= finalWidth)
	{
		stopTimer();
		return
	}
	
	sideBar.style.transform = 'translateX(' + String(transformX) + 'px)';
	
	
	
}// end of function


// stop timer
function stopTimer()
{
	window.clearInterval(id);
	transformX = 0;
}
// pegging back the side bar
function moveSideBarIn()
{
	transformX--;
	sideBar.style.transform = 'translateX(' + String(transformX) + 'px)';
	
	
}// end of function

// universal function
function sideBarMovement()
{
	console.log("bouding rect "+sideBarDimensions.x);
	if(mouseHoverFlag)
	{
		//console.log("mouseHoverFlag" + mouseHoverFlag + " side bar movement true");
		moveSideBarOut();
	}else if(!mouseHoverFlag)
	{
		//console.log("mouseHoverFlag" + mouseHoverFlag + " side bar movement false");
		moveSideBarIn();
	}
	//mouseHoverFlag = false;
	
}// end of function

// keeps an eye if the mouse hovers
function mouseHover(event)
{
	
	mouseHoverFlag = true;
	repeatFrame();
	
}// end of function


// keeps an eye if the mouse has left the targeted area
function mouseOut(event)
{
	//console.log("mouseOut");
	mouseHoverFlag = false;
	repeatFrame();
	
}// end of function 






