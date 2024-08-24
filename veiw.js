const elInputTotalBalance = document.querySelector('#total_balance')
const elButtonSetUSD = document.querySelector('.field_button > input')
elButtonSetUSD.onclick = onClickSetUSD

function onClickSetUSD() {
  handleUserBTC(btcObj.value, btcObj.maxValue)
}

function renderInputTextBTC(value) {
  const elInputText = document.querySelector('.row > input[ctrl="btc"]')
  elInputText.value = value
}

function renderProgress(value, max) {
  const listProgresses = document.querySelectorAll('progress[ctrl="btc"]')
  listProgresses.forEach(progress => {
    progress.max = max
    progress.value = value
  })
}

function renderBTC(value, max) {
  renderInputTextBTC(value)
  renderProgress(value, max)
}

const elButtonMinus = document.querySelector(
  'button[ctrl="btc"][action="minus"]'
)
elButtonMinus.onclick = onclickBTCMinusButton

function onclickBTCMinusButton(value, max) {
  let minus = 1
  value = value - minus
  renderBTC(value, max)
}

const elButtonPlus = document.querySelector('button[ctrl="btc"][action="plus"]')
elButtonPlus.onclick = onclickBTCPlusButton

function onclickBTCPlusButton(e) {
  let value = document.querySelector('input[ctrl="btc"]').textContent
  renderBTC(value, max)
}

const elRangeInput = document.querySelector(
  'input[type="range"][ctrl="btc"][name="btc"]'
)
elRangeInput.onchange = onChangeRangeInputBTC

function onChangeRangeInputBTC(e) {
  let value = e.target.value
  let max = e.target.max
  renderBTC(value, max)
}
