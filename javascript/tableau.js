function createFoundationPiles() {

    const tableauCards = document.querySelectorAll(".tableau-pile");
   
    tableauCards.forEach((card, index) => {
        let maxOffset = 346;
        let cardId = card.id;
        let startingCount = Number(cardId.slice(-1)) - 1;
        for (let i = 0; i < startingCount; i++) {
            const flippedCard = document.createElement("div");
            flippedCard.classList.add("flipped");
            const cardOffset = 351 + i * 5;
            flippedCard.style.top = `${cardOffset}px`;
            card.appendChild(flippedCard);
            maxOffset = cardOffset
        }

        const faceCard = createCard(numArray[index], suitArray[index % 4]);
        const innerCard = faceCard.children[0].children[0];
        faceCard.style.position = "absolute";
        faceCard.style.top = `${maxOffset + 5}px`;
        innerCard.style.margin = "0px";
        card.appendChild(faceCard)
    });
}

createFoundationPiles();