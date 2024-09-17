function handleSetTotalUSD(total) {
  cryptos.setTotal(total)
  Object.keys(cryptos.coins).forEach(crypto => {
    renderCrypto(cryptos.coins[crypto].value, cryptos.coins[crypto].max, crypto)
  })
}
function handleInputInputUsd(value, crypto) {
  cryptos.setValue(value, crypto)
  renderCrypto(cryptos.coins[crypto].value, cryptos.coins[crypto].max, crypto)
}
function handleMinusButton(crypto) {
  cryptos.minusOne(crypto)
  renderCrypto(cryptos.coins[crypto].value, cryptos.coins[crypto].max, crypto)
}
function handlePlusButton(crypto) {
  cryptos.plusOne(crypto)
  renderCrypto(cryptos.coins[crypto].value, cryptos.coins[crypto].max, crypto)
}
function handleRangeInput(value, crypto) {
  if (value <= cryptos.coins[crypto].max) {
    cryptos.setValue(value, crypto)
    renderCrypto(cryptos.coins[crypto].value, cryptos.coins[crypto].max, crypto)
  }
}
function handleRemoveShifter(e, crypto) {
  renderCryptoShifterDelite(e)
  cryptos.removeCrypto(crypto)
}
function handleCryptoSelect(e) {
  const cryptoName = e.target.options[e.target.selectedIndex].text
  if (cryptoName) {
    renderCryptoShifter(cryptoName)
    cryptos.addCrypto(cryptoName)
  }
}
