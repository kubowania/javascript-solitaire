function createCard(num, suit) {
    let centerSuit = []

    if (parseInt(num) !== NaN) {
        for (let i = 0; i < num; i++) {
            centerSuit.push(`<div class="center-suits">${suit.code}</div>`)
        }
    } else {
        centerSuit.push(`<div class="center-suits">${suit.code}</div>`)
    }

    let joinedCenterSuites = centerSuit.join("")

    const cardTemp = ` <div class="card-container">
                        <div class="card ${suit.name}" >
                            <div class="card-title">
                                <p class="card-num">${num}</p>
                                <div class="suit">${suit.code}</div>
                            </div>
                            <div class="center-suits-container">
                            ${joinedCenterSuites}
                            </div>
                            <div class="card-title-bottom">
                                <p class="card-num">${num}</p>
                                <div class="suit">${suit.code}</div>
                            </div>
                         </div >
                    </div > `

    const el = document.querySelector(".waste-container")
    const filledCard = document.createElement("div")
    filledCard.setAttribute("draggable", "true")
    filledCard.classList.add("moveable-card")
    filledCard.id = num + suit.name
    filledCard.innerHTML = cardTemp
    el.append(filledCard)
    return filledCard
}
