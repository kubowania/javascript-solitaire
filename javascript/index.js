// Creates a card that takes the num and suit of the playing card.
const numArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
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
const tableauPiles = []

// Create a holder for the initial stock cards
const stockCards = []

// "Enum" for the card piles
const Piles = Object.freeze({
    Foundation: "F",
    Stock: "S",
    Tableau: "T",
})

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
            tableauPiles.push([cardNum, cardSuit])
        }
    }

    shuffleCards(stockCards)
    shuffleCards(tableauPiles)
}

// "Shuffles" an array of cards
function shuffleCards(array) {
    // for (let i = 0; i < cardsArray.length; i++) {
    //     // use Math.random to choose an element in the array after the current one
    //     // and swap it with the current element
    //     let j = Math.floor(Math.random() * (cardsArray.length - i - 1) + i)
    //     [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]]
    // }

    // Use Math.random to sort cards
    array.sort(() => Math.random() - 0.5)

    return array
}

mapDeckToPiles()
