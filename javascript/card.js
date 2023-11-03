function createCard(num, suit) {

    const cardTemp = ` <div class="card-container">
                        <div class="card ${suit.name}" >
                            <div class="card-title">
                                <p class="card-num">${num}</p>
                                <div class="suit">${suit.code}</div>
                            </div>
                            <div class="bigsuit">${suit.code}</div>
                         </div >
                    </div > `


    const el = document.querySelector("#card")
    const filledCard = document.createElement("div")
    filledCard.innerHTML = cardTemp
    el.append(filledCard)

}
