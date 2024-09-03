function handleSetTotalUSD(total) {
  cryptos.setTotal(total)
  Object.keys(cryptos).forEach(crypto => {
    renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
  })
}
function handleInputInputUsd(value, crypto) {
  cryptos.setValue(value, crypto)
  renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
}
function handleMinusButton(crypto) {
  cryptos.minusOne(crypto)
  renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
}
function handlePlusButton(crypto) {
  cryptos.plusOne(crypto)
  renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
}
function handleRangeInput(value, crypto) {
  cryptos.setValue(value, crypto)
  renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
}
