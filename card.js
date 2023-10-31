 export default function CardTemplate(num, suit) {
    const num = num;
    const suit = suit;
     
    if(suit === "spades"){
        const suitIcon = "&#x2664"
     }
    else if(suit === "clubs"){
        const suitIcon = "&#x2667"
     }
    else if(suit === "diamonds"){
        const suitIcon = "&#x2662"
     }
    else if (suit === "heats"){
        const suitIcon = "&#x2661"
    }
     

    const card = ` <div class="card_container">
                     < div class= "card" >
                         <p class="cardnum">${num}</p>
                         <div class="suit">${suitIcon}</div>
                            <div class="bigsuit">${suitIcon}</div>
                    </div >
                 </div > `

    return
            card
}
