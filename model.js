let totalUSD = 0

const cryptos = {
  btc: {
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
  },
  etc: {
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
  },
  ltc: {
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
  },
  doge: {
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
  },
}

function magic(totalUSD) {
  btcObj.setMax(totalUSD)
  ethObj.setMax()
}
