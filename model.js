const cryptos = {
  totalUSD: 100,
  coins: {
    btc: {
      tokens: 0,
      value: 0,
      max: 100,
    },
    etc: {
      tokens: 0,
      value: 0,
      max: 100,
    },
    ltc: {
      tokens: 0,
      value: 0,
      max: 100,
    },
    doge: {
      tokens: 0,
      value: 0,
      max: 100,
    },
  },

  setTotal(total) {
    this.totalUSD = total
    Object.keys(this.coins).forEach(crypto => {
      this.coins[crypto].value = 0
      this.setMax(total, crypto)
    })
  },

  minusOne(crypto) {
    this.setValue(this.getValue(crypto) - 1, crypto)
  },

  plusOne(crypto) {
    this.setValue(this.getValue(crypto) + 1, crypto)
  },

  getValue(crypto) {
    return this.coins[crypto].value
  },

  setValue(value, crypto) {
    let sumVal = 0
    if (value > this.coins[crypto].max) return
    if (value < 0) return

    this.coins[crypto].value = value

    for (const key in this.coins) {
      sumVal += this.coins[key].value
    }

    for (const key in this.coins) {
      if (key === crypto) continue
      this.coins[key].max = this.totalUSD - sumVal + this.coins[key].value
    }
  },

  setMax(max, crypto) {
    this.coins[crypto].max = max
  },

  setNotMe(crypto) {
    const notMe = Object.keys(this.coins).find(key => key !== crypto)
    this.setValue(this.getValue(notMe), notMe)
  },

  addCrypto(crypto) {
    if (!this.coins[crypto]) {
      this.coins[crypto] = { value: 0, max: 0 }
    }
    this.setNotMe()
  },

  removeCrypto(crypto) {
    if (this.coins[crypto]) {
      delete this.coins[crypto]
    }
    this.setNotMe()
  },

  calcTokens(crypto, cur) {
    this.coins[crypto].tokens = cur / this.coins[crypto].value
  },
}
// cryptos.setMax(40000,"btc")
// cryptos.setValue(40000, 'btc')
// cryptos.calcTokens("btc", 56000)
// console.log(cryptos.coins.btc)

// // console.log(cryptos.coins)

// cryptos.setTotal(200)

// // console.log(cryptos.coins)

// cryptos.setValue(50, 'btc')

// // console.log(cryptos.coins)

// cryptos.setValue(50, 'doge')

// // console.log(cryptos.coins)

// cryptos.setValue(30, 'btc')

// // console.log(cryptos.coins)

// cryptos.minusOne('doge')
// cryptos.minusOne('doge')
// cryptos.minusOne('doge')
// cryptos.minusOne('doge')
// cryptos.minusOne('doge')

// // console.log(cryptos.coins)

// cryptos.addCrypto('sht')

// console.log(cryptos.coins)

// cryptos.removeCrypto('btc')

// console.log(cryptos.coins)
