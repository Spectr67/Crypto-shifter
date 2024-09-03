const elButtonSetUSD = document.querySelector('.field_button > input')

const listInputTexts = document.querySelectorAll('.shifter [type="text"]')

// const elInputTextBTC = document.querySelector('[type="text"][ctrl="btc"]')
// const elInputTextETH = document.querySelector('[type="text"][ctrl="etc"]')
// const elInputTextLTC = document.querySelector('[type="text"][ctrl="ltc"]')
// const elInputTextDOGE = document.querySelector('[type="text"][ctrl="doge"]')
const elButtonMinusBTC = document.querySelector('[ctrl="btc"][action="minus"]')
const elButtonMinusETH = document.querySelector('[ctrl="etc"][action="minus"]')
const elButtonMinusLTC = document.querySelector('[ctrl="ltc"][action="minus"]')
const elButtonMinusDOGE = document.querySelector(
  '[ctrl="doge"][action="minus"]'
)
const elButtonPlusBTC = document.querySelector('[ctrl="btc"][action="plus"]')
const elButtonPlusETH = document.querySelector('[ctrl="etc"][action="plus"]')
const elButtonPlusLTC = document.querySelector('[ctrl="ltc"][action="plus"]')
const elButtonPlusDOGE = document.querySelector('[ctrl="doge"][action="plus"]')

const elRangeInputBTC = document.querySelector('[type="range"][ctrl="btc"]')
const elRangeInputETH = document.querySelector('[type="range"][ctrl="etc"]')
const elRangeInputLTC = document.querySelector('[type="range"][ctrl="ltc"]')
const elRangeInputDOGE = document.querySelector('[type="range"][ctrl="doge"]')

listInputTexts.forEach(elInputText => {
  elInputText.oninput = onInputInputText
})

// elInputTextBTC.oninput = onInputInputText
// elInputTextETH.oninput = onInputInputText
// elInputTextLTC.oninput = onInputInputText
// elInputTextDOGE.oninput = onInputInputText
elRangeInputBTC.oninput = onChangeRangeInput
elRangeInputETH.oninput = onChangeRangeInput
elRangeInputLTC.oninput = onChangeRangeInput
elRangeInputDOGE.oninput = onChangeRangeInput
elButtonPlusBTC.onclick = onClickPlusButton
elButtonPlusETH.onclick = onClickPlusButton
elButtonPlusLTC.onclick = onClickPlusButton
elButtonPlusDOGE.onclick = onClickPlusButton
elButtonMinusBTC.onclick = onClickMinusButton
elButtonMinusETH.onclick = onClickMinusButton
elButtonMinusLTC.onclick = onClickMinusButton
elButtonMinusDOGE.onclick = onClickMinusButton
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
