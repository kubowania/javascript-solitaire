function createTableauPiles() {
    const tableauCards = document.querySelectorAll(".tableau-pile")

    tableauCards.forEach((card, index) => {
        let maxOffset = 5
        for (let i = 0; i < index; i++) {
            // Create the piles of cards that are initally flipped over
            const flippedCard = document.createElement("div")
            flippedCard.classList.add("card-back")
            const border = document.createElement("div")
            border.classList.add("card-border")
            flippedCard.appendChild(border)
            const cardOffset = 20 + i * 15
            flippedCard.style.top = `${cardOffset}px`
            card.appendChild(flippedCard)
            maxOffset = cardOffset
            if (tableauPiles) {
                tableauPiles[index].push("flipped")
            }
        }

        // Use the card indexes from the tableau cards holder if it has cards
        let faceCard
        if (initialTableauCards && initialTableauCards.length > 0) {
            let [num, suit] = initialTableauCards[index]
            faceCard = createCard(numArray[num], suitArray[suit])
        } else {
            faceCard = createCard(numArray[index], suitArray[index % 4])
        }
        const innerCard = faceCard.children[0].children[0]
        // Position the top cards over the flipped cards
        faceCard.style.position = "absolute"
        faceCard.style.top = `${maxOffset + 15}px`
        innerCard.style.margin = "0px"
        card.appendChild(faceCard)
        if (tableauPiles) {
            tableauPiles[index].push(faceCard.id)
        }
    })
    dragCard()
}

createTableauPiles()
