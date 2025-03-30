
let configuredPIN = "";
let inputPIN = "";

function savePINFromInput(input) {
  if (input.length !== 4 || !/^\d{4}$/.test(input)) {
    throw new Error('Invalid PIN');
  }
  configuredPIN = input;
  inputPIN = "";
  return true;
}

function validatePIN(entered) {
  return entered === configuredPIN ? "VALID PIN" : "INVALID PIN";
}

// UI Functions
function savePIN() {
  const pinInput = document.getElementById('set-pin');
  try {
    savePINFromInput(pinInput.value);
    inputPIN = "";
    updateDisplay();
    document.getElementById('result').textContent = '';
    alert('PIN saved!');
  } catch (e) {
    alert('Please enter a valid 4-digit numeric PIN.');
  }
}

function handleKeyPress(digit) {
  if (inputPIN.length >= 4) return;
  inputPIN += digit;
  updateDisplay();
  if (inputPIN.length === 4) {
    showValidationResult();
  }
}

function updateDisplay() {
  const masked = inputPIN.split('').map(() => '*').join('');
  const remaining = '_'.repeat(4 - inputPIN.length);
  document.getElementById('display').textContent = masked + remaining;
}

function showValidationResult() {
  const result = document.getElementById('result');
  const status = validatePIN(inputPIN);
  result.textContent = status === "VALID PIN" ? "Correct PIN!" : "Incorrect PIN.";
  result.style.color = status === "VALID PIN" ? "green" : "red";
  inputPIN = "";
  setTimeout(updateDisplay, 1000);
}

function createKeypad() {
  const keypad = document.getElementById('keypad');
  for (let i = 1; i <= 9; i++) {
    const key = document.createElement('div');
    key.className = 'key';
    key.textContent = i;
    key.onclick = () => handleKeyPress(i.toString());
    keypad.appendChild(key);
  }
  keypad.appendChild(document.createElement('div'));
  const zeroKey = document.createElement('div');
  zeroKey.className = 'key';
  zeroKey.textContent = '0';
  zeroKey.onclick = () => handleKeyPress('0');
  keypad.appendChild(zeroKey);
  const clearKey = document.createElement('div');
  clearKey.className = 'key';
  clearKey.textContent = '←';
  clearKey.onclick = () => {
    inputPIN = inputPIN.slice(0, -1);
    updateDisplay();
  };
  keypad.appendChild(clearKey);
}

if (typeof window !== 'undefined') {
  createKeypad();
  updateDisplay();
}
