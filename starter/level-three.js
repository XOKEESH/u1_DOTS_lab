/*
 * DOTS: Level Three
 *
 */


// Small=20 Large=5 Medium=10

let score = 0

const balls = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

balls.forEach(ball => {
ball.addEventListener ('click', () => {
    const incrementValue = parseInt(ball.getAttribute('data-increment'))
    console.log(incrementValue)    
    score += incrementValue 
    scoreDisplay.innerText = score.toString()
    if (score >= 100) {
        levelWinner.style.setProperty ('opacity', 1)
    }
})
})

//??? I'm soooo confused. - It works, but I dont understand how. Worked through this with Mike D.