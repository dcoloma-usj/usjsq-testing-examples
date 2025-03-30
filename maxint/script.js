
function maxint(value, maxint) {
    if (typeof value !== 'number' || typeof maxint !== 'number') return 'ERROR';
    if (maxint < 0) return 'ERROR';

    // Plausible mistake 1, forget the following line
    value = Math.abs(value);
    let sum = 0;
    
    // Plausible mistake 2, strictly smaller instead of smaller or equal
    for (let i = 0; i <= value; i++) sum += i;

    // Plausible mistake 3, strictly smaller instead of smaller or equal
    return sum <= maxint ? sum : 'ERROR';
}

function calculate() {
    let value = parseInt(document.getElementById('value').value);
    let max = parseInt(document.getElementById('maxint').value);
    const result = maxint(value, max);
    document.getElementById('result').innerText = result === 'ERROR' ? 'ERROR' : 'Result: ' + result;
}
