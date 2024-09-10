let totalUSD = 0

const cryptos = {
  coins: {
    btc: {
      value: 0,
      max: 100,
      min: 0,
    },
    etc: {
      value: 0,
      max: 100,
      min: 0,
    },
    ltc: {
      value: 0,
      max: 100,
      min: 0,
    },
    doge: {
      value: 0,
      max: 100,
      min: 0,
    },
  },
  setTotal(total) {
    Object.keys(this.coins).forEach(crypto => {
      this.coins[crypto].value = 0
      this.setMax(total, crypto)
    })
  },

  minusOne(crypto) {
    if (this.coins[crypto].value > this.coins[crypto].min) {
      this.coins[crypto].value -= 1
    }
  },

  plusOne(crypto) {
    if (this.coins[crypto].value < this.coins[crypto].max) {
      this.coins[crypto].value += 1
    }
  },

  setValue(value, crypto) {
    let sumVal = 0
    if (value > this.coins[crypto].max) return
    this.coins[crypto].value = value

    for (const item in this.coins) {
      sumVal += this.coins[item].value
    }

    for (const item in this.coins) {
      if (item === crypto) continue
      this.coins[item].max = totalUSD - sumVal + this.coins[item].value
    }
  },

  setMax(max, crypto) {
    this.coins[crypto].max = max
  },

  createCypto(value = 0, max = 0, min = 0) {
    return { value, max, min }
  },

  addCrypto(name, value = 0, max = 100, min = 0) {
    if (!this.coins[name]) {
      this.coins[name] = this.createCrypto(value, max, min)
    }
  },

  removeCrypto(crypto) {
    if (this.coins[crypto]) {
      delete this.coins[crypto]
    }
  },

  dividedCrypto(crypto, cur) {
    let resultCur = this.coins[crypto].value / cur
    return resultCur
  },
}
