function updateValues(base) {
  const numberInput = document.getElementById('numberInput');
  const decimalResult = document.getElementById('decimalResult');
  const octalResult = document.getElementById('octalResult');
  const hexadecimalResult = document.getElementById('hexadecimalResult');
  const binaryResult = document.getElementById('binaryResult');

  let decimalValue;

  if (base === 'decimal') {
    decimalValue = parseInt(numberInput.value, 10);
  } else if (base === 'binary') {
    decimalValue = binaryToDecimal(numberInput.value);
  } else if (base === 'hexadecimal') {
    decimalValue = hexToDecimal(numberInput.value);
  } else if (base === 'octal') {
    decimalValue = octalToDecimal(numberInput.value);
  }
  
  if (isNaN(decimalValue)) {
    decimalResult.value = '';
    octalResult.value = '';
    hexadecimalResult.value = '';
    binaryResult.value = '';
    return;
  }

  decimalResult.value = decimalValue;
  binaryResult.value = decimalToBinary(decimalValue);
  octalResult.value = decimalToOctal(decimalValue);
  hexadecimalResult.value = decimalToHex(decimalValue);
}

function decimalToBinary(decimal) {
  let result = '';
  while (decimal > 0) {
    result = (decimal % 2) + result;
    decimal = Math.floor(decimal / 2);
  }
  return result || '0';
}

function decimalToHex(decimal) {
  const hexChars = '0123456789ABCDEF';
  let result = '';
  while (decimal > 0) {
    result = hexChars[decimal % 16] + result;
    decimal = Math.floor(decimal / 16);
  }
  return result || '0';
}

function decimalToOctal(decimal) {
  let result = '';
  while (decimal > 0) {
    result = (decimal % 8) + result;
    decimal = Math.floor(decimal / 8);
  }
  return result || '0';
}

function binaryToDecimal(binary) {
  let result = 0;
  for (let i = 0; i < binary.length; i++) {
    result = result * 2 + parseInt(binary[i], 10);
  }
  return result;
}

function hexToDecimal(hex) {
  const hexChars = '0123456789ABCDEF';
  let result = 0;
  for (let i = 0; i < hex.length; i++) {
    result = result * 16 + hexChars.indexOf(hex[i].toUpperCase());
  }
  return result;
}

function octalToDecimal(octal) {
  let result = 0;
  for (let i = 0; i < octal.length; i++) {
    result = result * 8 + parseInt(octal[i], 10);
  }
  return result;
}

const numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input', () => updateValues('decimal'));
