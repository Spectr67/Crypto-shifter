function handleSetTotalUSD(max) {
  btcObj.setMax(max)
  ethObj.setMax(max)
  ltcObj.setMax(max)
  dogeObj.setMax(max)
  renderBTC(btcObj.value, btcObj.max)
  renderETH(ethObj.value, ethObj.max)
  renderLTC(ltcObj.value, ltcObj.max)
  renderDOGE(dogeObj.value, dogeObj.max)
}
//////////////////
function handleInputInputUsdBTC(value) {
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
//////////////////////////////
function handleInputInputUsdETH(value) {
  ethObj.setValue(value)
  renderETH(ethObj.value, ethObj.max)
}

function handleETHMinusButton() {
  ethObj.minusOne()
  renderETH(ethObj.value, ethObj.max)
}

function handleETHPlusButton() {
  ethObj.plusOne()
  renderETH(ethObj.value, ethObj.max)
}
function handleRangeInputETH(value) {
  ethObj.setValue(value)
  renderETH(ethObj.value, ethObj.max)
}
///////////////////////////////
function handleInputInputUsdLTC(value) {
  ltcObj.setValue(value)
  renderLTC(ltcObj.value, ltcObj.max)
}

function handleLTCMinusButton() {
  ethObj.minusOne()
  renderLTC(ltcObj.value, ltcObj.max)
}

function handleLTCPlusButton() {
  ltcObj.plusOne()
  renderLTC(ltcObj.value, ltcObj.max)
}
function handleRangeInputLTC(value) {
  ltcObj.setValue(value)
  renderLTC(ltcObj.value, ltcObj.max)
}
//////
function handleInputInputUsdDOGE(value) {
  dogeObj.setValue(value)
  renderDOGE(dogeObj.value, dogeObj.max)
}

function handleDOGEMinusButton() {
  dogeObj.minusOne()
  renderDOGE(dogeObj.value, dogeObj.max)
}

function handleDOGEPlusButton() {
  dogeObj.plusOne()
  renderDOGE(dogeObj.value, dogeObj.max)
}
function handleRangeInputDOGE(value) {
  dogeObj.setValue(value)
  renderDOGE(dogeObj.value, dogeObj.max)
}
