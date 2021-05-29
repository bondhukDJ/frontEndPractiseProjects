// front end ta koira legit moira jaitesi 

// var cardDiv = document.createElement('div');
// var cardImage = document.createElement('img');
// cardDiv.setAttribute('id' , 'tempCardBox');
// cardDiv.style.padding = '5px';
// cardDiv.style.width = '30%';
// cardImage.style.width = '100%';
// cardDiv.appendChild(cardImage);
var cardPlacementPlayer = document.getElementById('myCardsPlacement');
var myScore = document.getElementById('myScore');
var myScoreNumber = 0;
var botScoreNumber = 0;
var id = 0;

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
        
        myScoreNumber += Number(simulateHit(cardPlacementPlayer));
        if(myScoreNumber > 21)
        {
            bustHandler(myScore);
            return;
        }// end of if 
        
        myScore.innerHTML = "YOU: "+String(myScoreNumber);



    }else if(self.id === 'stand')
    {
        startTimer();
    }else if(self.id === 'deal')
    {
        simulateDeal();
    }// end of fi 
}// end of fucntion


function simulateHit(cardPlacementPlayer)
{
    let mixImgDiv = setImageAndDiv();
    let numberStr = randomCardSelect();
    mixImgDiv[1].src = cardValue[numberStr];
    cardPlacementPlayer.appendChild(mixImgDiv[0]);
    return numberStr;
}// end of function
function startTimer()
{
    id = window.setInterval(simulateStand , 1000);

}// end of function


function simulateStand()
{
    botScoreNumber += Number(simulateHit(document.getElementById('botCardsPlacement')));
    
    
    if(botScoreNumber >= 21 || botScoreNumber > myScoreNumber)
    {
        stoptimer();
        bustHandler(document.getElementById('botScore'));
        return;
        
    }
    document.getElementById('botScore').innerText = "BOT: "+String(botScoreNumber);

}// end of function

function stoptimer()
{
    window.clearInterval(id);

}// end of function

function bustHandler(score)
{
    score.innerHTML = "BUST!";
    // score.style.boxShadow = '5px 10px 50px rgba(255 , 0 , 0 , 1)';
    score.style.padding = '0px';
    score.style.color = 'red';
}// end of function


function winnerDecider()
{
    // will decide later

}// end of function






function simulateDeal()
{
    let playerCards =cardPlacementPlayer.children;
    let botCards = document.getElementById('botCardsPlacement').children

    // let allCardPlayed = cardPlacementPlayer.children.concat(document.getElementById('botCardsPlacement').children);
    // console.log(botCards);
    remChild(playerCards , cardPlacementPlayer);
    remChild(botCards ,document.getElementById('botCardsPlacement') );

}// end of function

function remChild(array1, parent)
{
    for(let i = 0; i < array1.length;i++)
    {
        if(array1[i].tagName != 'P');
        // if(array1[i].tagName != 'p')
        {
            parent.removeChild(array1[i]);
        }
    }// end of for loop 

}

function randomCardSelect()
{
    return String(Math.floor(Math.random() * 12) + 1);

}

function setImageAndDiv()
{
    let cardDiv = document.createElement('div');
    let cardImage = document.createElement('img');
    
    // cardDiv.setAttribute('id' , 'tempCardBox');
    cardDiv.style.padding = '5px';
    cardDiv.style.width = '30%';
    cardImage.style.width = '100%';
    cardDiv.appendChild(cardImage);
    return [cardDiv , cardImage];
}



//https://www.youtube.com/watch?v=MSf0Ip0hqRE&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&index=31
//https://www.youtube.com/watch?v=Qqx_wzMmFeA&t=15671s