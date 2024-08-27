function handleSetTotalUSD(max) {
  btcObj.setMax(max)
  renderBTC(btcObj.value, btcObj.max)
}

function handleInputInputUsd(value) {
  btcObj.setValue(value)
  renderBTC(btcObj.value, btcObj.max)
}

function handleBTCMinusButton() {
  btcObj.minusOne()
  renderBTC(btcObj.value, btcObj.max)
}

function handleBTCPlusButton() {
  btcObj.plusOne()
  renderBTC(btcObj.value, btcObj.max)
}
function handleRangeInputBTC(value) {
  btcObj.setValue(value)
  renderBTC(btcObj.value, btcObj.max)
}
