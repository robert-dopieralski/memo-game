let gameBoard = document.querySelector('.board')
let cards = 16
let values = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let cardSet

render()

function render(){
    generateCardSet()
    displayCards()
    console.log(cardSet)
}

function displayCards(){
    cardSet
    .forEach(card =>{
        let cardNode = document.createElement('div')
        cardNode.classList.add('cardUpsideDown')
        gameBoard.appendChild(cardNode)
    })
}

function generateCardSet(){
    cardSet = Array.from({length:cards}, el => ['#', pickValue()[0]])
}

function pickValue(){
    return values.splice(0,1)
}


// in case i would have another change of mind i will leave this stuff here for later

// let cardSet = Array.from({ length: 4 }, item => Array.from({ length: 4 }, place => []))

// renderCards()

// function renderCards() {
//     cardSet
//         .forEach(line => {
//             let i = 0
//             line
//                 .forEach(position => {
//                     let cardNode = document.createElement('div')
//                     cardNode.classList.add('cardUpsideDown')
//                     cardNode.addEventListener('click', turnAround)
//                     gameBoard.appendChild(cardNode)
//                     cardNode.textContent = i + 1
//                     i++
//                 })
//         })
// }

// function turnAround(event) {
//     let card = event.target
//     //card.textContent = 

//     console.log(card)
// }
// // console.log(cardSet)