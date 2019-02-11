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

function turnAround(event){
    let card = event.target
    card.classList.toggle('cardUpsideDown')
    card.classList.toggle('cardRightWay')
}

function displayCards(){
    cardSet
    .forEach(card =>{
        let cardNode = document.createElement('div')
        cardNode.classList.add('cardUpsideDown')
        cardNode.addEventListener('click', turnAround)
        let cardInnerText = document.createElement('p')
        cardInnerText.textContent = card
        cardNode.appendChild(cardInnerText)
        gameBoard.appendChild(cardNode)
    })
}

function generateCardSet(){
    cardSet = Array.from({length:cards}, el => pickValue()[0])
}

function pickValue(){
    pick = Math.floor(Math.random() * values.length)
    let value = values.splice(pick,(1))
    if (value !== undefined){
        return value
    }
    else{
        pickValue()
    }
}