let totalUSD = 0

const btcObj = {
  value: 0,
  max: 100,

  minusOne() {
    this.value -= 1
  },

  plusOne() {
    this.value += 1
  },

  setValue(value) {
    this.value = value
  },

  setMax(max) {
    this.max = max
  },
}
