// selectors
var listBoxes = document.querySelectorAll('.list');
var body = document.querySelector('body');
var dimension = {'width':String(0.3*listBoxes[0].getBoundingClientRect().width)+'px' , 'height':'100px'};
var numDimension = {'width':(0.3*listBoxes[0].getBoundingClientRect().width)/2 , 'height':50};
var allowMove = false;
var movingBox = document.createElement('div');












// functions


//utility function
function generalListEnumerate(index , childCount)
{
    for(let i = 0; i < childCount ;i++)
    {
        let div = document.createElement('div');
        div.classList.add('generalListItem')
        div.style.width = '30%';
        div.style.height = '100px';
        div.style.margin = '10px 0px';
        div.style.border = '1px solid black';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.appendChild(document.createTextNode('Item '+String(i+1)));
        listBoxes[index].appendChild(div);
    }// end of for
    listBoxes[index + 1].style.height = String(listBoxes[index].getBoundingClientRect().height) +'px';
}



function selectChild(event)
{
    if(!allowMove)
    {
        console.log(typeof event.target.className);

        if(event.target.className === 'generalListItem')
        {
            allowMove = true;
            removeChild(event , 0);
            // let div = document.createElement('div');
            movingBox.classList.add('generalListItem');
            movingBox.style.position = 'absolute';
            movingBox.style.left = String(event.clientX);
            movingBox.style.top = String(event.clientY);
            movingBox.style.width = dimension['width'];
            movingBox.style.height = dimension['height'];
            movingBox.style.margin = '10px 0px';
            movingBox.style.border = '1px solid black';
            movingBox.style.display = 'flex';
            movingBox.style.justifyContent = 'center';
            movingBox.style.alignItems = 'center';
            movingBox.appendChild(document.createTextNode('Item 1'));
            body.appendChild(movingBox);
            // movingBox = div;

        }

    }
    



}// end of function

function removeChild(event , index)
{
    listBoxes[index].removeChild(event.target);
    listBoxes[index + 1].style.height = String(listBoxes[index].getBoundingClientRect().height) +'px';
}// end of function


function mouseMove(event)
{
    // console.log(typeof event.clientX);
    if(allowMove)
    {
        console.log("mouse moving");
        movingBox.style.left = String(event.clientX -numDimension['width']) + 'px';
        movingBox.style.top = String(event.clientY - numDimension['height']) + 'px';

    }
}// end of function












// startUP

generalListEnumerate(0 , 7);

document.documentElement.addEventListener('mousemove' , mouseMove);

listBoxes.forEach((box) => 
{
    box.addEventListener('click' , selectChild);



});