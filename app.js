const counterText = document.querySelector('.counter')
const decrease = document.querySelector('.btn-decrease')
const increase = document.querySelector('.btn-increase')
const reset = document.querySelector('.btn-reset')

let counterNumber = 0

const resetFunction = function () {
  counterNumber = 0
  //   counterText.className = ''
  counterText.textContent = counterNumber
  counterText.className = 'white'
}

const decreaseFunction = function () {
  counterNumber--
  counterText.textContent = counterNumber
  counterText.className =
    counterNumber === 0 ? 'white' : counterNumber < 0 ? 'red' : 'green'
}

const increaseFunction = function () {
  counterNumber++
  counterText.textContent = counterNumber
  counterText.className =
    counterNumber === 0 ? 'white' : counterNumber > 0 ? 'green' : 'red'
}

resetFunction()

reset.addEventListener('click', resetFunction)
decrease.addEventListener('click', decreaseFunction)
increase.addEventListener('click', increaseFunction)
