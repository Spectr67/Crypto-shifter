function generateOption(cryptoName) {
  const elOption = document.createElement('option')
  elOption.value = cryptoName.toUpperCase()
  return elOption
}

function generateShifter(cryptoName) {
  const elDivShifter = document.createElement('div')
  const elLabel = document.createElement('label')
  const elProgressTop = document.createElement('progress')
  const elDivRow = document.createElement('div')
  const elButtonMinus = document.createElement('button')
  const elInput = document.createElement('input')
  const elButtonPlus = document.createElement('button')
  const elProgressBot = document.createElement('progress')
  const elInputRange = document.createElement('input')
  const elButtonDelete = document.createElement('button')
  const elSpanValueTokens = document.createElement('span')

  elSpanValueTokens.textContent = '0'
  elSpanValueTokens.setAttribute('tokens', '0')
  elSpanValueTokens.setAttribute('class', 'value_span')
  elSpanValueTokens.setAttribute('ctrl', cryptoName)

  /////////////////
  elSpanValueTokens.setAttribute('class', 'value_span')
  ////////////////////
  elDivShifter.setAttribute('class', 'shifter')

  elLabel.setAttribute('for', `edit-${cryptoName}`)
  elLabel.textContent = `USD to ${cryptoName.toUpperCase()}`

  elProgressTop.setAttribute('ctrl', cryptoName)
  elProgressTop.setAttribute('max', '0')
  elProgressTop.setAttribute('value', '0')

  elDivRow.setAttribute('class', 'row')

  elButtonMinus.setAttribute('ctrl', cryptoName)
  elButtonMinus.setAttribute('action', 'minus')
  elButtonMinus.innerHTML = '&lt;'

  elInput.setAttribute('type', 'text')
  elInput.setAttribute('ctrl', cryptoName)
  elInput.setAttribute('name', `edit-${cryptoName}`)
  elInput.setAttribute('id', `edit-${cryptoName}`)

  elButtonPlus.setAttribute('ctrl', cryptoName)
  elButtonPlus.setAttribute('action', 'plus')
  elButtonPlus.innerHTML = '&gt;'

  elProgressBot.setAttribute('ctrl', cryptoName)
  elProgressBot.setAttribute('max', '0')
  elProgressBot.setAttribute('value', '0')

  elInputRange.setAttribute('type', 'range')
  elInputRange.setAttribute('ctrl', cryptoName)
  elInputRange.setAttribute('name', cryptoName)
  elInputRange.setAttribute('min', '0')
  elInputRange.setAttribute('max', '0')
  elInputRange.setAttribute('value', '0')

  elButtonDelete.setAttribute('ctrl', cryptoName)
  elButtonDelete.setAttribute('action', 'delete')
  elButtonDelete.textContent = 'Delete'

  elButtonMinus.onclick = onClickMinusButton
  elButtonPlus.onclick = onClickPlusButton
  elInput.oninput = onInputInputText
  elInputRange.oninput = onChangeRangeInput

  elButtonDelete.onclick = e => handleRemoveShifter(e, cryptoName)

  elDivShifter.appendChild(elLabel)
  elDivShifter.appendChild(elProgressTop)
  elDivShifter.appendChild(elDivRow)
  elDivRow.appendChild(elButtonMinus)
  elDivRow.appendChild(elInput)
  elDivRow.appendChild(elButtonPlus)
  elDivShifter.appendChild(elProgressBot)
  elDivShifter.appendChild(elInputRange)
  elDivShifter.appendChild(elSpanValueTokens)
  elDivShifter.appendChild(elButtonDelete)

  return elDivShifter
}
