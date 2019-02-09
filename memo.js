let gameBoard = document.querySelector('.board')

let cardSet = Array.from({ length: 4 }, item => Array.from({ length: 4 }, place => []))

renderCards()

function renderCards() {
    cardSet
        .forEach(line => {
            let i = 0
            line
                .forEach(position => {
                    let cardNode = document.createElement('div')
                    cardNode.classList.add('cardUpsideDown')
                    gameBoard.appendChild(cardNode)
                    cardNode.textContent = i + 1
                    i++
                })
        })
}

// console.log(cardSet)