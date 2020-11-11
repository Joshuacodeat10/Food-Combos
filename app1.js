document.querySelector("#btn-cereal").addEventListener("click", generateRandomPhrase);
function generateRandomPhrase(){
    let phrase  = getRandomPhrase();
    document.querySelector("#phrase2").innerText=phrase;
} 
function getRandomPhrase(){
    const beginning = ["marshmellos","sandwich","doritos", "cheetos","takis"]
    const middle = ["choclate","milk","whipped cream"]
    const end = ["icecream","tapioca","juice"]



let beginningIndex= parseInt(Math.random() * beginning.length)
let middleIndex= parseInt(Math.random() * middle.length)
let endIndex= parseInt(Math.random() * end.length)

let phrase ="";

phrase += beginning[beginningIndex];
phrase += " ";
phrase += middle[middleIndex];
phrase += " ";
phrase += end[endIndex];
phrase += " ";
return phrase;
}


