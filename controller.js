function handleUserBTC(value, max) {
  btcObj.changeValue(value)
  btcObj.setMaxValue(max)
  renderBTC(value, max)
}
