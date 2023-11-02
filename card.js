 export default function CardTemplate(num, suit) {
    const num = num;
    const suit = suit;
     
    if(suit === "spades"){
        suit = "&#x2664"
     }
    else if(suit === "clubs"){
         suit = "&#x2667"
     }
    else if(suit === "diamonds"){
         suit= "&#x2662"
     }
    else if (suit === "heats"){
        suit = "&#x2661"
    }
     

    const card = ` <div class="card_container">
                     < div class= "card" >
                         <p class="cardnum">${num}</p>
                         <div class="suit">${suit}</div>
                            <div class="bigsuit">${suit}</div>
                    </div >
                 </div > `

    return
            card
}
