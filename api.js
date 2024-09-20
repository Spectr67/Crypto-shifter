document.addEventListener('DOMContentLoaded', initCryptoDropdown)

const API_URL = 'https://min-api.cryptocompare.com/data'
const API_KEY =
  '60f2a30ac76737b31217e6df583ef2a685dde6cd3f08837eb3d5b60f63f97076'

const urlCryptoPrice = crypto =>
  `${API_URL}/price?fsym=${crypto}&tsyms=USD&api_key=${API_KEY}`

const urlCryptoNamesList = `${API_URL}/blockchain/list?api_key=${API_KEY}`

async function sendRequest(url) {
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

async function getCryptoPrice(crypto) {
  const url = urlCryptoPrice(crypto)
  const data = await sendRequest(url)
  return data
}

async function getAvailableCryptos() {
  const CryptoData = await sendRequest(urlCryptoNamesList)
  return Object.keys(CryptoData.Data)
}

async function initCryptoDropdown() {
  const cryptos = await getAvailableCryptos()
  remouteDownloadingCrypto(cryptos)
}
