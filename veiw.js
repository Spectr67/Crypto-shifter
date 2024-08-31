const elInputTotalBalance = document.querySelector('#total_balance')
const elButtonSetUSD = document.querySelector('.field_button > input')
elButtonSetUSD.onclick = onClickSetTotalUSD

function onClickSetTotalUSD() {
  const elInputTotalBalance = document.querySelector('#total_balance')
  const total = parseInt(elInputTotalBalance.value)
  handleSetTotalUSD(total)
}

const elButtonMinusBTC = document.querySelector('[ctrl="btc"][action="minus"]')
const elButtonPlusBTC = document.querySelector('[ctrl="btc"][action="plus"]')
const elRangeInputBTC = document.querySelector(
  'input[type="range"][ctrl="btc"]'
)
const elInputTextBTC = document.querySelector('[type="text"][ctrl="btc"]')

elInputTextBTC.oninput = onInputInputTextBTC
elRangeInputBTC.oninput = onChangeRangeInputBTC
elButtonPlusBTC.onclick = onClickBTCPlusButton
elButtonMinusBTC.onclick = onClickBTCMinusButton

function onInputInputTextBTC(e) {
  const value = parseInt(e.target.value)
  handleInputInputUsdBTC(value)
}

function renderInputTextBTC(value) {
  const elInputText = document.querySelector('[type="text"][ctrl="btc"]')
  elInputText.value = value
}

function renderBTCProgress(value, max) {
  const listProgresses = document.querySelectorAll('progress[ctrl="btc"]')
  listProgresses.forEach(progress => {
    progress.max = max
    progress.value = value
  })
}

function renderBTCInputRange(value, max) {
  const elRange = document.querySelector('[type="range"][ctrl="btc"]')
  elRange.max = max
  elRange.value = value
}

function renderBTC(value, max) {
  renderInputTextBTC(value)
  renderBTCInputRange(value, max)
  renderBTCProgress(value, max)
}

function onClickBTCMinusButton() {
  handleBTCMinusButton()
}

function onClickBTCPlusButton() {
  handleBTCPlusButton()
}

function onChangeRangeInputBTC(e) {
  const value = parseInt(e.target.value)
  handleRangeInputBTC(value)
}

const elButtonMinusETH = document.querySelector('[ctrl="etc"][action="minus"]')
const elButtonPlusETH = document.querySelector('[ctrl="etc"][action="plus"]')
const elRangeInputETH = document.querySelector(
  'input[type="range"][ctrl="etc"]'
)
const elInputTextETH = document.querySelector('[type="text"][ctrl="etc"]')

elInputTextETH.oninput = onInputInputTextETH
elRangeInputETH.oninput = onChangeRangeInputETH
elButtonPlusETH.onclick = onClickETHPlusButton
elButtonMinusETH.onclick = onClickETHMinusButton

function onInputInputTextETH(e) {
  const value = parseInt(e.target.value)
  handleInputInputUsdETH(value)
}

function renderInputTextETH(value) {
  const elInputText = document.querySelector('[type="text"][ctrl="etc"]')
  elInputText.value = value
}

function renderETHProgress(value, max) {
  const listProgresses = document.querySelectorAll('progress[ctrl="etc"]')
  listProgresses.forEach(progress => {
    progress.max = max
    progress.value = value
  })
}

function renderETHInputRange(value, max) {
  const elRange = document.querySelector('[type="range"][ctrl="etc"]')
  elRange.max = max
  elRange.value = value
}

function renderETH(value, max) {
  renderInputTextETH(value)
  renderETHInputRange(value, max)
  renderETHProgress(value, max)
}

function onClickETHMinusButton() {
  handleETHMinusButton()
}

function onClickETHPlusButton() {
  handleETHPlusButton()
}

function onChangeRangeInputETH(e) {
  const value = parseInt(e.target.value)
  handleRangeInputETH(value)
}

const elButtonMinusLTC = document.querySelector('[ctrl="ltc"][action="minus"]')
const elButtonPlusLTC = document.querySelector('[ctrl="ltc"][action="plus"]')
const elRangeInputLTC = document.querySelector(
  'input[type="range"][ctrl="ltc"]'
)
const elInputTextLTC = document.querySelector('[type="text"][ctrl="ltc"]')

elInputTextLTC.oninput = onInputInputTextLTC
elRangeInputLTC.oninput = onChangeRangeInputLTC
elButtonPlusLTC.onclick = onClickLTCPlusButton
elButtonMinusLTC.onclick = onClickLTCMinusButton

function onInputInputTextLTC(e) {
  const value = parseInt(e.target.value)
  handleInputInputUsdLTC(value)
}

function renderInputTextLTC(value) {
  const elInputText = document.querySelector('[type="text"][ctrl="ltc"]')
  elInputText.value = value
}

function renderLTCProgress(value, max) {
  const listProgresses = document.querySelectorAll('progress[ctrl="ltc"]')
  listProgresses.forEach(progress => {
    progress.max = max
    progress.value = value
  })
}

function renderLTCInputRange(value, max) {
  const elRange = document.querySelector('[type="range"][ctrl="ltc"]')
  elRange.max = max
  elRange.value = value
}

function renderLTC(value, max) {
  renderInputTextLTC(value)
  renderLTCInputRange(value, max)
  renderLTCProgress(value, max)
}

function onClickLTCMinusButton() {
  handleLTCMinusButton()
}

function onClickLTCPlusButton() {
  handleLTCPlusButton()
}

function onChangeRangeInputLTC(e) {
  const value = parseInt(e.target.value)
  handleRangeInputLTC(value)
}

const elButtonMinusDOGE = document.querySelector(
  '[ctrl="doge"][action="minus"]'
)
const elButtonPlusDOGE = document.querySelector('[ctrl="doge"][action="plus"]')
const elRangeInputDOGE = document.querySelector(
  'input[type="range"][ctrl="doge"]'
)
const elInputTextDOGE = document.querySelector('[type="text"][ctrl="doge"]')

elInputTextDOGE.oninput = onInputInputTextDOGE
elRangeInputDOGE.oninput = onChangeRangeInputDOGE
elButtonPlusDOGE.onclick = onClickDOGEPlusButton
elButtonMinusDOGE.onclick = onClickDOGEMinusButton

function onInputInputTextDOGE(e) {
  const value = parseInt(e.target.value)
  handleInputInputUsdDOGE(value)
}

function renderInputTextDOGE(value) {
  const elInputText = document.querySelector('[type="text"][ctrl="doge"]')
  elInputText.value = value
}

function renderDOGEProgress(value, max) {
  const listProgresses = document.querySelectorAll('progress[ctrl="doge"]')
  listProgresses.forEach(progress => {
    progress.max = max
    progress.value = value
  })
}

function renderDOGEInputRange(value, max) {
  const elRange = document.querySelector('[type="range"][ctrl="doge"]')
  elRange.max = max
  elRange.value = value
}

function renderDOGE(value, max) {
  renderInputTextDOGE(value)
  renderDOGEInputRange(value, max)
  renderDOGEProgress(value, max)
}

function onClickDOGEMinusButton() {
  handleDOGEMinusButton()
}

function onClickDOGEPlusButton() {
  handleDOGEPlusButton()
}

function onChangeRangeInputDOGE(e) {
  const value = parseInt(e.target.value)
  handleRangeInputDOGE(value)
}
