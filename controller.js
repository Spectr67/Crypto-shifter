function handleSetTotalUSD(max) {
  btcObj.setMax(max)
  renderBTC(btcObj.value, btcObj.max)
}
