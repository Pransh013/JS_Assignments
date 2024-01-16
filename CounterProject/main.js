const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const reset = document.querySelector('#reset')
const scoreText = document.querySelector('#score')

let score = 0;

add.addEventListener('click', () => {
  score += 1;
  scoreText.innerText = `Score : ${score}`;
})

subtract.addEventListener('click', () => {
  score -= 1;
  scoreText.textContent = `Score : ${score}`;
})

reset.addEventListener('click', () => {
  score = 0;
  scoreText.textContent = `Score : ${score}`;
})