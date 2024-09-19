document.addEventListener('DOMContentLoaded', initCryptoDropdown)

const API_URL = 'https://min-api.cryptocompare.com/data'
const API_KEY =
  '60f2a30ac76737b31217e6df583ef2a685dde6cd3f08837eb3d5b60f63f97076'

async function fetchCryptoCur(crypto) {
  const API = `${API_URL}/price?fsym=${crypto}&tsyms=USD&api_key=${API_KEY}`
  const resp = await fetch(API)
  const cur = await resp.json()
  return cur
}

async function fetchCryptoNames() {
  const resp = await fetch(`${API_URL}/blockchain/list?api_key=${API_KEY}`)
  const json = await resp.json()
  console.log(json.Data)
  return Object.keys(json.Data).map(d => d.toLowerCase())
}

async function initCryptoDropdown() {
  const cryptos = await fetchCryptoNames()
  renderCryptoDatalist(cryptos)
  const dropdown = document.getElementById('newshifter')
  dropdown.addEventListener('input', handleCryptoDataList)
}
