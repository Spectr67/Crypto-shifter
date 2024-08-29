let totalUSD = 0

const btcObj = {
  value: 0,
  max: 100,
  min: 0,

  minusOne() {
    if (this.value > 0) {
      this.value -= 1
    }
  },

  plusOne() {
    this.value += 1
  },

  setValue(value) {
    if (value !== '' && !isNaN(value)) {
      this.value = parseInt(value, 10)
    } else {
      this.value = 0
    }
  },

  setMax(max) {
    this.max = max
  },
}

let value = 100
function distribute(
  value,
  btcVar,
  btcVal,
  ehtVar,
  ehtVal,
  ltcVar,
  ltcVal,
  dogeVar,
  dogeVal
) {
  let result = {}

  let totalVal = btcVal + ehtVal + ltcVal + dogeVal
  if (totalVal > value) {
    return
  }
  result[btcVar] = value * btcVal
  result[ehtVar] = value * ehtVal
  result[ltcVar] = value * ltcVal
  result[dogeVar] = value * dogeVal

  return result
}

let result = distribute(value, 'BTC', 0.1, 'ETH', 0.5, 'LTC', 0.1, 'DOGE', 0.3)
console.log(result)
