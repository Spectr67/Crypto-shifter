function handleSetTotalUSD(max) {
  btcObj.setMax(max)
  renderBTC(btcObj.value, btcObj.max)
}

function handleInputInputUsd(value) {
  btcObj.setValue(value)
  renderBTC(value, max)
}

function handleBTCMinusButton() {
  btcObj.minusOne
  renderBTC(value, max)
}

function handleBTCPlusButton() {
  btcObj.plusOne
  renderBTC(value, max)
}
function handleRangeInputBTC() {
  setValue(value)
  renderBTC(value, max)
}
