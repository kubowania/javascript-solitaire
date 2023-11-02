// import { CardTemplate } from "./card"

 const card = function CardTemplate(num, suit) {
    // const num = num;
    // const suit = suit;
   
     
    if(suit === "spades"){
        suit = "&#x2664"
     }
    else if(suit === "clubs"){
         suit = "&#x2667"
     }
    else if(suit === "diamonds"){
         suit= "&#x2662"
     }
    else if (suit === "hearts"){
        suit = "&#x2661"
    }
    else
        console.log("not a vaild suit")
     

     const cardTemp= ` <div class="card_container">
                     <div class= "card" >
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

card(2,"hearts")