document.querySelector("#btn-generate").addEventListener("click", generateRandomPhrase);
function generateRandomPhrase(){
    let phrase  = getRandomPhrase();
    document.querySelector("#phrase").innerText=phrase;
} 
function getRandomPhrase(){
    const beginning = ["rice","potato","yam","plantain",]
    const middle = ["tomato stew","egg","vegetable","beans"]
const end =["meat","fish","chicken","gizzard",]
const end2 =["water","lipton tea"," coke"," fanta"]


let beginningIndex= parseInt(Math.random() * beginning.length)
let middleIndex= parseInt(Math.random() * middle.length)
let endIndex= parseInt(Math.random() * end.length)
let end2Index= parseInt(Math.random() * end2.length)
let phrase ="";

phrase += beginning[beginningIndex];
phrase += " ";
phrase += middle[middleIndex];
phrase += " ";
phrase += end[endIndex];
phrase += "  with ";  
phrase += end2[end2Index];
phrase += " ";

return phrase;
}


