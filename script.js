const bulbElement = document.getElementById('bulb');
let state = false;

function togglebulb() 
{
    if(state==false)   
    {
        bulbElement.src = './img/on-bulb (2).png';
        state = true;
    }  
    else
    {
        bulbElement.src = './img/off-bulb.png';
        state = false;
    }
}