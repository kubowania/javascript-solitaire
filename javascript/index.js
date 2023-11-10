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

for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < suitArray.length; j++) {
        createCard(numArray[i], suitArray[j])
    }
}

