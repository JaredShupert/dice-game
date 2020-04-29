let image1 = document.querySelector('.img1')
let image2 = document.querySelector('.img2')

let playerOneDiceValue = randomDiceImage(image1)
let playerTwoDiceValue = randomDiceImage(image2)

if (playerOneDiceValue > playerTwoDiceValue){
    document.querySelector('h1').textContent = '🚩 Player 1 Wins'
} else if(playerOneDiceValue < playerTwoDiceValue){
    document.querySelector('h1').textContent = 'Player 2 Wins 🚩'
}else {
    document.querySelector('h1').textContent = "It's a tie!"
}

function randomDiceImage(image){
    let randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    switch(randomNumber){
        case 1:
            image.setAttribute('src', 'images/dice1.png')
            return 1
        case 2:
            image.setAttribute('src', 'images/dice2.png')
            return 2
        case 3:
            image.setAttribute('src', 'images/dice3.png')
            return 3
        case 4:
            image.setAttribute('src', 'images/dice4.png')
            return 4
        case 5:
            image.setAttribute('src', 'images/dice5.png')
            return 5
        case 6:
            image.setAttribute('src', 'images/dice6.png')
            return 6
    }
}