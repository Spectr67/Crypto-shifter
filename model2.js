let totalUSD = 0

const cryptos = {
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

  setTotal(total) {
    Object.keys(this).forEach(crypto => {
      this[crypto].value = 0
      this.setMax(total, crypto)
    })
  },

  minusOne(crypto) {
    if (this[crypto].value > 0) {
      this[crypto].value -= 1
    }
  },

  plusOne(crypto) {
    if (this[crypto].value < this[crypto].max) {
      this[crypto].value += 1
    }
  },

  setValue(value, crypto) {
    this[crypto].value = Math.max(
      0,
      Math.min(parseInt(value) || 0, this[crypto].max)
    )
  },

  setMax(max, crypto) {
    this[crypto].max = max
  },
}

console.log(+'')

console.log(!isNaN('w'))

console.log(parseInt('qert') || 0)
