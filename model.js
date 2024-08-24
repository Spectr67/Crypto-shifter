let totalUSD = 0

const btcObj = {
  value: 0,
  minValue: 0,
  maxValue: 100,

  valueMinus() {
    this.value -= 1
  },
  valuePlus() {
    this.value += 1
  },
  changeValue(value) {
    this.value = value
  },
  setMaxValue(max) {
    this.maxValue = max
  },
}
