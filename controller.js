function handleSetTotalUSD(max) {
  Object.keys(cryptos).forEach(crypto => {
    cryptos[crypto].setMax(max)
    renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
  })
}
function handleInputInputUsd(value, crypto) {
  cryptos[crypto].setValue(value)
  renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
}
function handleMinusButton(crypto) {
  cryptos[crypto].minusOne()
  renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
}
function handlePlusButton(crypto) {
  cryptos[crypto].plusOne()
  renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
}
function handleRangeInput(value, crypto) {
  cryptos[crypto].setValue(value)
  renderCrypto(cryptos[crypto].value, cryptos[crypto].max, crypto)
}
