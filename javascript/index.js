// Creates a card that takes the num and suit of the playing card.
const numArray = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
]
const suitArray = [
    {
        name: "spades",
        code: "&#x2664",
    },
    {
        name: "clubs",
        code: "&#x2667",
    },
    {
        name: "diamonds",
        code: "&#x2662",
    },
    {
        name: "hearts",
        code: "&#x2661",
    },
]

// Create a 2d array of the deck representing the suits and the numbers of the cards
const cardDeckStatus = Array.from({ length: 4 }, () => Array(13).fill(0))

// Create a holder for the initial tableau cards
const initialTableauCards = []

// Create a holder for the initial stock cards
const stockCards = []

// Create a holder for the foundation piles
const foundationPiles = Array.from({ length: 4 }, () => [])

// Create a holder for the tableau piles
const tableauPiles = Array.from({ length: 7 }, () => [])

// "Enum" for the card piles
const Piles = Object.freeze({
    Foundation: "F",
    Stock: "S",
    Tableau: "T",
})

const TABLEAU = "tableau-pile"
const FOUNDATION = "foundation"

const stock = document.querySelector(".stock")
const wasteContainer = document.querySelector(".waste-container")
const childern = wasteContainer.children

function revealStock() {
    if (wasteContainer.children.length < 3) {
        for (let i = 0; i < 3; i++) {
            let [num, suit] = stockCards[i]
            createCard(numArray[num ?? i], suitArray[suit ?? 1])
        }
    } else if (wasteContainer.children.length >= 3) {
        while (wasteContainer.firstChild) {
            wasteContainer.removeChild(wasteContainer.firstChild)
        }
        for (let i = 0; i < 3; i++) {
            let [num, suit] = stockCards[i]
            createCard(numArray[num ?? i], suitArray[suit ?? 1])
        }
    }
    getDraggableCards()
}
stock.addEventListener("click", revealStock)

// Maps the cards in the dack into the separate piles
function mapDeckToPiles() {
    // Instantiate the deck with placements for the tableau and stock cards
    const cardsArray = Array(52)
    cardsArray.fill(Piles.Stock, 0, 24)
    cardsArray.fill(Piles.Tableau, 24)

    shuffleCards(cardsArray)

    for (let i = 0; i < cardsArray.length; i++) {
        let cardNum = i % 13 //card numbers
        let cardSuit = Math.floor(i / 13) // card suits
        cardDeckStatus[cardSuit][cardNum] = cardsArray[i]

        // Load the stock and tableau holders for the current game
        if (cardsArray[i] === Piles.Stock) {
            stockCards.push([cardNum, cardSuit])
        } else if (cardsArray[i] === Piles.Tableau) {
            initialTableauCards.push([cardNum, cardSuit])
        }
    }

    shuffleCards(stockCards)
    shuffleCards(initialTableauCards)
}

// "Shuffles" an array of cards
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // use Math.random to choose an element in the array after the current one
        // and swap it with the current element
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array
}

// Cards will have their ids tracked for drag events
function getDraggableCards() {
    const selectedCards = document.querySelectorAll(".moveable-card")
    selectedCards.forEach((selectedCard) => {
        selectedCard.addEventListener("dragstart", (e) => {
            const transferData =
                e.target.id + "," + selectedCard.parentElement.id
            e.dataTransfer.setData("text/plain", transferData)
        })
    })
}

// Enable event listeners for the piles the cards will be dragged into
function dragCard() {
    const foundationStacks = document.querySelectorAll(".foundation")
    const tableauStacks = document.querySelectorAll(".tableau-pile")

    getDraggableCards()
    dragToPile(foundationStacks)
    dragToPile(tableauStacks)

    function dragToPile(piles) {
        piles.forEach((pile, index) => {
            pile.addEventListener("dragenter", (e) => {
                e.preventDefault()
                e.target.classList.add("drag-over")
            })
            pile.addEventListener("dragleave", (e) => {
                e.target.classList.remove("drag-over")
            })
            pile.addEventListener("dragover", (e) => {
                e.preventDefault()
                e.target.classList.add("drag-over")
            })
            pile.addEventListener("drop", (e) => {
                e.preventDefault()
                e.target.classList.remove("drag-over")
                const data = e.dataTransfer.getData("text/plain").split(",")
                const [cardId, previousPileId] = data
                const draggedCard = document.getElementById(cardId)

                let isValidCard = checkDragToPile(
                    pile.id,
                    cardId,
                    previousPileId
                )
                if (isValidCard) {
                    if (pile.id.startsWith(TABLEAU)) {
                        // Calculate the card position for the active tableau pile
                        const size = tableauPiles[index].length - 1
                        const offset = 20 + size * 15
                        draggedCard.style.top = `${offset}px`
                    } else {
                        draggedCard.style.top = "unset"
                    }
                    draggedCard.style.position = "absolute"
                    draggedCard.firstElementChild.firstElementChild.style.margin =
                        "0px"
                    pile.append(draggedCard)
                }
            })
        })
    }
}

function checkDragToPile(pileId, cardId, previousPileId) {
    const pileNumberId = pileId.slice(-1) - 1
    const previousPileNumberId = previousPileId
        ? previousPileId.slice(-1) - 1
        : -1

    // Get the number and the suit of the current card
    const cardNum = cardId[0] == 1 ? cardId.substring(0, 2) : cardId[0]
    const cardSuit = cardId[0] == 1 ? cardId.substring(2) : cardId.substring(1)
    const suitIndex = suitArray.findIndex((x) => x.name == cardSuit)
    const numIndex = numArray.indexOf(cardNum)
    const cardStatus = cardDeckStatus[suitIndex][numIndex]

    // update the status of the piles after the card has been moved
    if (pileId.startsWith(FOUNDATION)) {
        if (
            foundationPiles[pileNumberId].length === numIndex &&
            cardStatus !== Piles.Foundation
        ) {
            foundationPiles[pileNumberId].push(cardId)
            cardDeckStatus[suitIndex][numIndex] = Piles.Foundation
            if (previousPileId.startsWith(TABLEAU)) {
                tableauPiles[previousPileNumberId].pop()
            }
            return true
        }
    }
    if (pileId.startsWith(TABLEAU)) {
        cardDeckStatus[suitIndex][numIndex] = Piles.Tableau
        tableauPiles[pileNumberId].push(cardId)
        if (previousPileId.startsWith(FOUNDATION)) {
            foundationPiles[previousPileNumberId].pop()
        } else if (previousPileNumberId != -1) {
            tableauPiles[previousPileNumberId].pop()
        }
        return true
    }
    return false
}

mapDeckToPiles()
