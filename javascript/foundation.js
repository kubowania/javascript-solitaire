function createfoundationDeck() {
    const foundationCards = document.querySelectorAll(".foundation")
    foundationCards.forEach((card) => {
        const suitsDisplay = document.createElement("div")
        suitsDisplay.classList.add("suits-holder")
        suitArray.forEach((suit) => {
            const s = document.createElement("div")
            s.classList.add("suit", suit.name)
            s.innerHTML = suit.code
            suitsDisplay.append(s)
        })

        card.append(suitsDisplay)
    })
}
createfoundationDeck()
