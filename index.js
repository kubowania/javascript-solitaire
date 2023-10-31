import { CardTemplate } from "./card"

const cardplace = document.querySelectorAll("#test")
function placecard (){
cardplace.append(CardTemplate(1,"spades"))}
console.log (CardTemplate(1, "spade"))
placecard()