function handleRenderAllCryptos() {
  Object.keys(modelCryptos.coins).forEach(cryptoName => {
    renderCrypto(
      modelCryptos.coins[cryptoName].value,
      modelCryptos.coins[cryptoName].max,
      cryptoName,
      modelCryptos.coins[cryptoName].tokens
    )
  })
}

function handleSetTotalUSD(total) {
  modelCryptos.setTotal(total)
  handleRenderAllCryptos()
}

function handleInputInputUsd(value, cryptoName) {
  modelCryptos.setValue(value, cryptoName)
  handleRenderAllCryptos(cryptoName)
}

function handleMinusButton(cryptoName) {
  modelCryptos.minusOne(cryptoName)
  handleRenderAllCryptos(cryptoName)
}

function handlePlusButton(cryptoName) {
  modelCryptos.plusOne(cryptoName)
  handleRenderAllCryptos(cryptoName)
}

function handleRangeInput(value, cryptoName) {
  modelCryptos.setValue(value, cryptoName)
  handleRenderAllCryptos(cryptoName)
}

function handleRemoveShifter(e, cryptoName) {
  renderCryptoShifterDelite(e)
  modelCryptos.removeCrypto(cryptoName)
}

function remouteDownloadingCrypto(availableCoins) {
  modelCryptos.setAvaibleCoins(availableCoins)
  renderCryptoDatalist(availableCoins)
}

async function handleAddNewShifter(cryptoName) {
  modelCryptos.addCrypto(cryptoName)
  const priceUsdForOneToken = await getCryptoPrice(cryptoName)
  modelCryptos.coins[cryptoName].cur = priceUsdForOneToken
  modelCryptos.calcTokens(cryptoName)
  renderCryptoShifter(cryptoName)
}

function handleCryptoDataList(e) {
  const cryptoName = e.target.value
  if (cryptoName) {
    renderCryptoShifter(cryptoName)
    modelCryptos.addCrypto(cryptoName)
  }
}
