const elButtonSetUSD = document.querySelector('.field_button > input')
const listInputTexts = document.querySelectorAll('.shifter [type="text"]')
const elButtonMinusAll = document.querySelectorAll('[action="minus"]')
const elButtonPlusAll = document.querySelectorAll('[action="plus"]')
const elInputTextAll = document.querySelectorAll('[type="text"]')
const elRangeInputAll = document.querySelectorAll('[type="range"]')

listInputTexts.forEach(elInputText => {
  elInputText.oninput = onInputInputText
})

elButtonPlusAll.forEach(button => {
  button.onclick = onClickPlusButton
})

elButtonMinusAll.forEach(button => {
  button.onclick = onClickMinusButton
})

elInputTextAll.forEach(input => {
  input.oninput = onInputInputText
})

elRangeInputAll.forEach(input => {
  input.oninput = onChangeRangeInput
})

elButtonSetUSD.onclick = onClickSetTotalUSD

function onClickSetTotalUSD() {
  const elInputTotalBalance = document.querySelector('#total_balance')
  const total = parseInt(elInputTotalBalance.value)
  handleSetTotalUSD(total)
}

function onInputInputText(e) {
  const crypto = e.target.getAttribute('ctrl')
  const value = parseInt(e.target.value)
  handleInputInputUsd(value, crypto)
}

function onClickMinusButton(e) {
  const crypto = e.target.getAttribute('ctrl')
  handleMinusButton(crypto)
}

function onClickPlusButton(e) {
  const crypto = e.target.getAttribute('ctrl')
  handlePlusButton(crypto)
}

function onChangeRangeInput(e) {
  const crypto = e.target.getAttribute('ctrl')
  const value = parseInt(e.target.value)
  handleRangeInput(value, crypto)
}

function renderCrypto(value, max, crypto) {
  renderInputText(value, crypto)
  renderInputRange(value, max, crypto)
  renderProgress(value, max, crypto)
}

function renderInputText(value, crypto) {
  const elInputText = document.querySelector(`[type="text"][ctrl="${crypto}"]`)
  elInputText.value = value
}

function renderProgress(value, max, crypto) {
  const listProgresses = document.querySelectorAll(`progress[ctrl="${crypto}"]`)
  listProgresses.forEach(progress => {
    progress.max = max
    progress.value = value
  })
}

function renderInputRange(value, max, crypto) {
  const elRange = document.querySelector(`[type="range"][ctrl="${crypto}"]`)
  elRange.max = max
  elRange.value = value
}

////////////////////////////
function generateShifter(cryptoName) {
  const elDivShifter = document.createElement('div')
  const elLabel = document.createElement('label')
  const elProgressTop = document.createElement('progress')
  const elDivRow = document.createElement('div')
  const elButtonMinus = document.createElement('button')
  const elInput = document.createElement('input')
  const elButtonPlus = document.createElement('button')
  const elProgressBot = document.createElement('progress')
  const elInputRange = document.createElement('input')
  const elButtonDelete = document.createElement('button')

  elDivShifter.setAttribute('class', 'shifter')

  elLabel.setAttribute('for', `edit-${cryptoName}`)
  elLabel.textContent = `USD to ${cryptoName}`

  elProgressTop.setAttribute('ctrl', cryptoName)
  elProgressTop.setAttribute('max', '1000')
  elProgressTop.setAttribute('value', '0')

  elDivRow.setAttribute('class', 'row')

  elButtonMinus.setAttribute('ctrl', cryptoName)
  elButtonMinus.setAttribute('action', 'minus')
  elButtonMinus.innerHTML = '&lt;'

  elInput.setAttribute('type', 'text')
  elInput.setAttribute('ctrl', cryptoName)
  elInput.setAttribute('name', `edit-${cryptoName}`)
  elInput.setAttribute('id', `edit-${cryptoName}`)

  elButtonPlus.setAttribute('ctrl', cryptoName)
  elButtonPlus.setAttribute('action', 'plus')
  elButtonPlus.innerHTML = '&gt;'

  elProgressBot.setAttribute('ctrl', cryptoName)
  elProgressBot.setAttribute('max', '1000')
  elProgressBot.setAttribute('value', '0')

  elInputRange.setAttribute('type', 'range')
  elInputRange.setAttribute('ctrl', cryptoName)
  elInputRange.setAttribute('name', cryptoName)
  elInputRange.setAttribute('min', '0')
  elInputRange.setAttribute('max', '1000')
  elInputRange.setAttribute('value', '0')

  elButtonDelete.setAttribute('ctrl', cryptoName)
  elButtonDelete.setAttribute('action', 'delete')
  elButtonDelete.textContent = 'Delete'

  elButtonDelete.onclick = e => handleRemoveShifter(e, cryptoName)

  elDivShifter.appendChild(elLabel)
  elDivShifter.appendChild(elProgressTop)
  elDivShifter.appendChild(elDivRow)
  elDivRow.appendChild(elButtonMinus)
  elDivRow.appendChild(elInput)
  elDivRow.appendChild(elButtonPlus)
  elDivShifter.appendChild(elProgressBot)
  elDivShifter.appendChild(elInputRange)
  elDivShifter.appendChild(elButtonDelete)

  return elDivShifter
}

function renderCryptoShifter(cryptoName) {
  const elDivShifter = generateShifter(cryptoName)
  const elDivBotPave = document.querySelector('div.bottom.pave')
  elDivBotPave.appendChild(elDivShifter)
}

function renderCryptoShifterDelite(e) {
  const elDivShifter = e.target.parentElement
  elDivShifter.remove()
}
/////////////////////

function renderCryptoSelect(cryptos) {
  const select = document.getElementById('cryptoSelect')
  cryptos.forEach(crypto => {
    const option = document.createElement('option')
    option.value = crypto.id
    option.text = `${crypto.name} (${crypto.symbol.toUpperCase()})`
    select.appendChild(option)
  })
}
