document.addEventListener('DOMContentLoaded', initCryptoDropdown)

async function fetchCryptoCur(crypto) {
  const API = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD`
  const resp = await fetch(API)
  const cur = await resp.json()
  return cur
}

async function fetchCryptoNames() {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5000&page=1'
  )
  const cryptoNames = await response.json()
  return cryptoNames
}

async function initCryptoDropdown() {
  const cryptos = await fetchCryptoNames()
  renderCryptoSelect(cryptos)
  const dropdown = document.getElementById('cryptoSelect')
  dropdown.addEventListener('change', handleCryptoSelect)
}
