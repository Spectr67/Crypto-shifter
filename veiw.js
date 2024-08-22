const elInputTotalBalance = document.querySelector('#total_balance')
const elButtonSetUSD = document.querySelector('.field_button > input')
elButtonSetUSD.onclick = onClickSetUSD

function onClickSetUSD() {
  renderInputTextBTC()
}

function renderInputTextBTC(num) {
  const elInputText = document.querySelector('.row > input[ctrl="btc"]')
  elInputText.value = num
}
















































// function renderUSDRange() {
//   const elInputTotalBalance = document.querySelector('#total_balance')
//   const elRangeInputs = document.querySelectorAll('input[type="range"]')

//   elRangeInputs.forEach(input => {
//     input.max = elInputTotalBalance.value
//   })
// }

// const elRangeInputs = document.querySelectorAll('input[type="range"]')
// const elProgressElements = document.querySelectorAll('progress')
// const elInputUSDValues = document.querySelectorAll('.row > input')

// function onRangeChange(e) {
//   elProgressElements.value = e.target.value
//   elInputUSDValues.textContent = e.target.value
// }

// elRangeInputs.forEach(rangeInput => {
//   rangeInput.onchange = onRangeChange
// })
