function createCard(num, suit) {
    let centerSuit = []

    function getFaceCardSvg(cardType, suitName) {
        const svgs = {
            K: `<img src="images/king-svgrepo-com.svg" class="face-card-svg ${suitName}" alt="King">`, // SVG for King
            Q: `<img src="images/queen-svgrepo-com.svg" class="face-card-svg ${suitName}" alt="Queen">`, // SVG for Queen
            J: `<img src="images/jack-svgrepo-com.svg" class="face-card-svg ${suitName}" alt="Jack">`, // SVG for Jack
        }
        return svgs[cardType] || ""
    }

    if (!isNaN(parseInt(num))) {
        for (let i = 0; i < num; i++) {
            centerSuit.push(`<div class="center-suits">${suit.code}</div>`)
        }
    } else if (["K", "Q", "J"].includes(num)) {
        centerSuit.push(
            `<div class="center-suits">${getFaceCardSvg(num, suit.name)}</div>`
        )
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
