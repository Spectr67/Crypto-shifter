const elButtonSetUSD = document.querySelector('.field_button > input')
const listInputTexts = document.querySelectorAll('.shifter [type="text"]')
const listButtonsMinus = document.querySelectorAll('.shifter [action="minus"]')
const listButtonsPlus = document.querySelectorAll('.shifter [action="plus"]')
const listRangeInput = document.querySelectorAll('.shifter [type="range"]')
const elButtonAddNewShifter = document.querySelector('.new_shifter')

listInputTexts.forEach(elInputText => {
  elInputText.oninput = onInputInputText
})

listButtonsPlus.forEach(elButton => {
  elButton.onclick = onClickPlusButton
})

listButtonsMinus.forEach(elButton => {
  elButton.onclick = onClickMinusButton
})

listRangeInput.forEach(elInputRange => {
  elInputRange.oninput = onChangeRangeInput
})

elButtonSetUSD.onclick = onClickSetTotalUSD
elButtonAddNewShifter.onclick = onClickAddNewShifter

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

function renderCrypto(value, max, crypto, tokens) {
  renderInputText(value, crypto)
  renderInputRange(value, max, crypto)
  renderProgress(value, max, crypto)
  renderCryptoTokens(crypto, tokens)
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

function renderCryptoTokens(crypto, tokens) {
  const elSpan = document.querySelector(`span[ctrl="${crypto}"]`)
  elSpan.textContent = `Tokens: ${tokens}`
}

function renderCryptoShifter(cryptoName) {
  const elDivBotPave = document.querySelector('div.bottom.pave')
  const elDivShifter = generateShifter(cryptoName)
  elDivBotPave.appendChild(elDivShifter)
}

function renderCryptoShifterDelite(e) {
  const elDivShifter = e.target.parentElement
  elDivShifter.remove()
}

function renderCryptoDatalist(cryptos) {
  const elDatalist = document.querySelector('#newshifter')
  cryptos.forEach(cryptoName => {
    const elOption = generateOption(cryptoName)
    elDatalist.appendChild(elOption)
  })
}

function onClickAddNewShifter() {
  const elInputNewShifter = document.querySelector('#newshifterInput')
  const cryptoName = elInputNewShifter.value
  handleAddNewShifter(cryptoName)
}
