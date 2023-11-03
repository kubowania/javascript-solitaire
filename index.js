// import { CardTemplate } from "./card"
// Creates a card that takes the num and suit of the playing card. 
 const numArray=[1,2,3,4,5,6,7,8,9,"J","Q","K"]
 const suitArray=["spades","clubs","diamonds","hearts"]
const card = function CardTemplate(num, suit) {

    if (suit === "spades") {
        suit = "&#x2664"
    }
    else if (suit === "clubs") {
        suit = "&#x2667"
    }
    else if (suit === "diamonds") {
        suit = "&#x2662"
    }
    else if (suit === "hearts") {
        suit = "&#x2661"
    }
    else
        console.log("not a vaild suit")


    const cardTemp = ` <div class="card_container">
                        <div class= "card ${suit}" >
                            <p class="cardnum">${num}</p>
                            <div class="suit">${suit}</div>
                            <div class="bigsuit">${suit}</div>
                         </div >
                    </div > `


    const el = document.querySelector("#card")
    const filledcard = document.createElement("div")
    filledcard.innerHTML = cardTemp
    el.append(filledcard)

}
 for(let i=0; i < numArray.length; i++){
    for (let j=0; j<suitArray.length; j++){
        card(numArray[i],suitArray[j])
    }
 }

// card(2, "clubs")