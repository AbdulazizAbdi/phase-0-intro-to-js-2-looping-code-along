const names = ["Mike", "Amy", "John"];
const messages = [];

function writeCards(names, eventName){
    for (let a = 0; a < names.length; a++){
       messages[a]= `Thank you, ${names[a]}, for the wonderful ${eventName} gift!`;
       
    
    }
    return messages;
}


let countingStart = 15;
function countDown(countingStart){

    while (countingStart >= 0){
        console.log(countingStart--)

    }


}