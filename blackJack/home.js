// front end ta koira legit moira jaitesi 

var cardDiv = document.createElement('div');
var cardImage = document.createElement('img');
cardDiv.setAttribute('id' , 'tempCardBox');
cardDiv.style.padding = '5px';
cardDiv.style.width = '30%';
cardImage.style.width = '100%';
cardDiv.appendChild(cardImage);
var cardPlacementPlayer = document.getElementById('myCardsPlacement');

var cardValue = {
    "1":"./images/A.png",  
    "2":"./images/2.png",
    "3":"./images/3.png",  
    "4":"./images/4.png",  
    "5":"./images/5.png",  
    "6":"./images/6.png",  
    "7":"./images/7.png",  
    "8":"./images/8.png",
    "9":"./images/9.png",  
    "10":"./images/10.png",  
    "11":"./images/J.png",
    "12":"./images/Q.png",  
    "13":"./images/K.png",          

};






function buttonPressSimulate(self)
{
    if(self.id === 'hit')
    {
        simulateHit();

    }else if(self.id === 'stand')
    {
        simulateStand();
    }else if(self.id === 'deal')
    {
        simulateDeal();
    }
}// end of fucntion


function simulateHit()
{
    cardImage.src = cardValue[randomCardSelect()];
    cardPlacementPlayer.appendChild(cardDiv);
}// end of function

function simulateStand()
{

}// end of function

function simulateDeal()
{

}// end of function

function randomCardSelect()
{
    return String(Math.floor(Math.random() * 12) + 1);

}

