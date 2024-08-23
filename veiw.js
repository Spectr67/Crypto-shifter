const elInputTotalBalance = document.querySelector('#total_balance')
const elButtonSetUSD = document.querySelector('.field_button > input')
elButtonSetUSD.onclick = onClickSetUSD

function onClickSetUSD() {
  renderInputTextBTC(1000)
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

function renderBTCMinusButton() {}
