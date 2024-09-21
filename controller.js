function handleSetTotalUSD(total) {
  modelCryptos.setTotal(total)
  Object.keys(modelCryptos.coins).forEach(crypto => {
    renderCrypto(
      modelCryptos.coins[crypto].value,
      modelCryptos.coins[crypto].max,
      crypto
    )
  })
}
function handleInputInputUsd(value, crypto) {
  modelCryptos.setValue(value, crypto)
  renderCrypto(
    modelCryptos.coins[crypto].value,
    modelCryptos.coins[crypto].max,
    crypto
  )
}
function handleMinusButton(crypto) {
  modelCryptos.minusOne(crypto)
  renderCrypto(
    modelCryptos.coins[crypto].value,
    modelCryptos.coins[crypto].max,
    crypto
  )
}
function handlePlusButton(crypto) {
  modelCryptos.plusOne(crypto)
  renderCrypto(
    modelCryptos.coins[crypto].value,
    modelCryptos.coins[crypto].max,
    crypto
  )
}
function handleRangeInput(value, crypto) {
  if (value <= modelCryptos.coins[crypto].max) {
    modelCryptos.setValue(value, crypto)
    renderCrypto(
      modelCryptos.coins[crypto].value,
      modelCryptos.coins[crypto].max,
      crypto
    )
  }
}
function handleRemoveShifter(e, crypto) {
  renderCryptoShifterDelite(e)
  modelCryptos.removeCrypto(crypto)
}
function handleCryptoDataList(e) {
  const cryptoName = e.target.value
  if (cryptoName) {
    renderCryptoShifter(cryptoName)
    modelCryptos.addCrypto(cryptoName)
  }
}
function remouteDownloadingCrypto(cryptos) {
  modelCryptos.setAvaibleCoins(cryptos)
  renderCryptoDatalist(cryptos)
}

async function handleAddNewShifter(cryptoName) {
  modelCryptos.addCrypto(cryptoName)
  const priceUsdForOneToken = await getCryptoPrice(cryptoName)
  modelCryptos.calcTokens(cryptoName, priceUsdForOneToken)
  console.log(priceUsdForOneToken)
  console.log(modelCryptos.coins[cryptoName])
  renderCryptoShifter(cryptoName)
}
