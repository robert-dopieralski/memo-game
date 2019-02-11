let gameBoard = document.querySelector('.board')
let cards = 16
const values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let cardSet
let score = 0
let choice
let time = 0
let timer

render()

function render() {
    choice = templateArray()
    updateTime()
    updateBestTime()
    generateCardSet()
    displayCards()
    Timer()
}

function templateArray() {
    return Array.from(values)
}

function Timer() {
    timer = setInterval(clock, 1000)
}

function clock() {
    time++
    updateTime()
}

function updateBestTime() {
    let bestTime = localStorage.getItem('bestTime')
    let bestTimeNode = document.querySelector('.bestTime')
    if (bestTime !== null) {
        bestTimeNode.textContent = "The best time on this machine was: " + bestTime
    }
    if (bestTime === null) {
        bestTimeNode.textContent = "No one finished this game on this machine so far :-) "
    }

}

function updateTime() {
    let clockNode = document.querySelector('.timer')
    clockNode.textContent = "Time in seconds: " + time
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
        if (localStorage.getItem('bestTime') === null) {
            localStorage.setItem('bestTime', time)
        }
        else if (localStorage.getItem('bestTime') > time) {
            time = 0
            clearInterval(timer)
        }
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