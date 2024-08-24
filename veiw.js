const elInputTotalBalance = document.querySelector('#total_balance')
const elButtonSetUSD = document.querySelector('.field_button > input')
const elButtonMinus = document.querySelector('[ctrl="btc"][action="minus"]')
const elButtonPlus = document.querySelector('[ctrl="btc"][action="plus"]')
const elRangeInput = document.querySelector('input[type="range"][ctrl="btc"]')
const elInputTextBTC = document.querySelector('[type="text"][ctrl="btc"]')

elInputTextBTC.oninput = onInputInputText
elRangeInput.oninput = onChangeRangeInputBTC
elButtonPlus.onclick = onClickBTCPlusButton
elButtonMinus.onclick = onClickBTCMinusButton
elButtonSetUSD.onclick = onClickSetTotalUSD

function renderInputTextBTC(value) {
  const elInputText = document.querySelector('[type="text"][ctrl="btc"]')
  elInputText.value = value
}

function renderProgress(value, max) {
  const listProgresses = document.querySelectorAll('progress[ctrl="btc"]')
  listProgresses.forEach(progress => {
    progress.max = max
    progress.value = value
  })
}

function renderInputRange(value, max) {
  const elRange = document.querySelector('[type="range"][ctrl="btc"]')
  elRange.max = max
  elRange.value = value
}

function renderBTC(value, max) {
  renderInputTextBTC(value)
  renderInputRange(value, max)
  renderProgress(value, max)
}

function onClickSetTotalUSD() {
  const elInputTotalBalance = document.querySelector('#total_balance')
  const total = elInputTotalBalance.value
  handleSetTotalUSD(total)
}

function onInputInputText(e) {
  const value = +e.target.value
  renderBTC(value, 1000)
}

function onClickBTCMinusButton() {
  let value = +document.querySelector('[type="text"][ctrl="btc"]').value
  renderBTC(value - 1, 1000)
}

function onClickBTCPlusButton() {
  let value = +document.querySelector('[type="text"][ctrl="btc"]').value
  renderBTC(value + 1, 1000)
}

function onChangeRangeInputBTC(e) {
  let value = e.target.value
  let max = e.target.max
  renderBTC(value, max)
}
