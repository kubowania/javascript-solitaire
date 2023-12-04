function createTableauPiles() {
    const tableauCards = document.querySelectorAll(".tableau-pile")

    tableauCards.forEach((card, index) => {
        let maxOffset = 5
        const cardId = card.id
        const startingCount = Number(cardId.slice(-1)) - 1
        for (let i = 0; i < startingCount; i++) {
            const flippedCard = document.createElement("div")
            flippedCard.classList.add("card-back")
            const border = document.createElement("div")
            border.classList.add("card-border")
            flippedCard.appendChild(border)
            const cardOffset = 20 + i * 15
            flippedCard.style.top = `${cardOffset}px`
            card.appendChild(flippedCard)
            maxOffset = cardOffset
        }

        const faceCard = createCard(numArray[index], suitArray[index % 4])
        const innerCard = faceCard.children[0].children[0]
        faceCard.style.position = "absolute"
        faceCard.style.top = `${maxOffset + 15}px`
        innerCard.style.margin = "0px"
        card.appendChild(faceCard)
    })
}

createTableauPiles()
