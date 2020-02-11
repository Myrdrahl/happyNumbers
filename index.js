let chosenEnd = document.getElementById('userInput')
let printZone = document.getElementById('paragraph')
let submitButton = document.getElementById('submitButton')
let initialNumberToBeTested = 0
let temporaryNumberToBeTested = 0

function kickIt () {
  chosenEnd = chosenEnd.value
  for (let i = 0; i <= chosenEnd; i++) {
    // A happy number will be identified within 8 cycles
    temporaryNumberToBeTested = initialNumberToBeTested
    for (let j = 0; j < 8; j++) {
      if (temporaryNumberToBeTested === 1) {
        printZone.innerText += initialNumberToBeTested + ' is a happy number'
        printZone.innerHTML += '</br>'
        break
      } else if (j === 8 && temporaryNumberToBeTested !== 1) {
        printZone.innerText += initialNumberToBeTested + ' is an unhappy number'
        printZone.innerHTML += '</br>'
      } else {
        let splittet = splitNumber(temporaryNumberToBeTested)
        let lengde = temporaryNumberToBeTested.toString().length
        let sum = 0
        for (let k = 0; k < lengde; k++) {
          let singleSum = Math.pow(splittet[k], 2)
          sum += singleSum
        }
        temporaryNumberToBeTested = sum
      }
    }
    initialNumberToBeTested += 1
  }
}

function splitNumber (temporaryNumberToBeTested) {
  return [...temporaryNumberToBeTested + ''].map(Number)
}

function reset() {
  printZone.innerText = ''
  printZone.innerHTML = ''
}

submitButton.addEventListener('click', function () {
  reset()
  kickIt()
})
