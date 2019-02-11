let gameBoard = document.querySelector('.board')
let cards = 16
const values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let cardSet
let score = 0
let choice

render()

function render() {
    choice = templateArray()
    generateCardSet()
    displayCards()
    console.log(cardSet)
}

function templateArray(){
    let array = Array.from(values)
    return array
}

function vanishPair() {
    let active = document.querySelectorAll('.active')
    active
        .forEach(card => {
            card.parentElement.removeChild(card)
        })
    checkIfEndOfTheGame()
}

function flipCards() {
    let active = document.querySelectorAll('.active')
    active
        .forEach(card => {
            card.classList.toggle('cardUpsideDown')
            card.classList.toggle('cardRightWay')
            card.classList.toggle('active')
        })
}

function checkIfEndOfTheGame() {
    let cards = document.querySelectorAll('.card')
    if (cards.length === 0) {
        render()
    }
}

function checkIfPair() {
    let active = document.querySelectorAll('.active')
    if (active.length === 2) {
        let cardOne = active[0].innerHTML
        let cardTwo = active[1].innerHTML
        if (cardOne === cardTwo) {
            score++
            setTimeout(vanishPair, 1000)
        }
        else {
            setTimeout(flipCards, 3000)
        }
    }
}

function turnAround(event) {
    let active = document.querySelectorAll('.active')
    if (active.length < 2) {
        let card = event.target
        card.classList.toggle('cardUpsideDown')
        card.classList.toggle('cardRightWay')
        card.classList.toggle('active')
        checkIfPair()
    }
}

function displayCards() {
    cardSet
        .forEach(card => {
            let cardNode = document.createElement('div')
            cardNode.classList.add('card')
            cardNode.classList.add('cardUpsideDown')
            cardNode.addEventListener('click', turnAround)
            let cardInnerText = document.createElement('p')
            cardInnerText.textContent = card
            cardNode.appendChild(cardInnerText)
            gameBoard.appendChild(cardNode)
        })
}

function generateCardSet() {
    cardSet = Array.from({ length: cards }, el => pickValue()[0])
}

function pickValue() {
    pick = Math.floor(Math.random() * choice.length)
    let value = choice.splice(pick, (1))
    if (value !== undefined) {
        return value
    }
    else {
        pickValue()
    }
}