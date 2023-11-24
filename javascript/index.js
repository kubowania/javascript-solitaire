// Creates a card that takes the num and suit of the playing card. 
const numArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
const suitArray = [
    {
        name: "spades",
        code: "&#x2664"
    },
    {
        name: "clubs",
        code: "&#x2667"
    },
    {
        name: "diamonds",
        code: "&#x2662"
    },
    {
        name: "hearts",
        code: "&#x2661"
    },
]

const stock = document.querySelector(".stock")
const wasteContainer = document.querySelector(".waste-container")
const childern = wasteContainer.children

function revealStock() {
    if (wasteContainer.children.length < 3) {
        for (let i = 0; i < 3; i++) {
            createCard(numArray[i], suitArray[1])
        }
    }
    else if (wasteContainer.children.length >= 3) {
        while (wasteContainer.firstChild) {
            wasteContainer.removeChild(wasteContainer.firstChild)
        }
        for (let i = 0; i < 3; i++) {
            createCard(numArray[i], suitArray[1])
        }
    }
}
stock.addEventListener("click", revealStock)
