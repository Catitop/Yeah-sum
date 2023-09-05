const result = document.querySelector(".number_viewer")
const firstInput = document.querySelector(".number_input")
const secondInput = document.querySelector(".second_number_input")
firstInput.setAttribute('value', 'Type number')
secondInput.setAttribute('value', 'Type number')

function firstValueDisappearance() {
    firstInput.removeAttribute('value')
}

function firstValueReappearance() {
    const { value } = firstInput

    if(value == '') {
        firstInput.setAttribute('value', 'Type number')
    }
}

function secondValueDisappearance() {
    secondInput.removeAttribute('value')
}

function secondValueReappearance() {
    const { value } = secondInput

    if(value == '') {
        secondInput.setAttribute('value', 'Type number')
    }
}

function getResult() {
    var firstInputValue = firstInput.value
    var secondInputValue = secondInput.value

    if(isNaN(firstInputValue) || isNaN(secondInputValue)) {
        alert('Você deve escrever um número em ambos os espaços.')
        return
    }

    if(firstInputValue == '' || secondInputValue == '') {
        alert('Você deve escrever um número em ambos os espaços.')
        return
    }

    result.innerHTML = Number(firstInputValue)+ Number(secondInputValue)
}
