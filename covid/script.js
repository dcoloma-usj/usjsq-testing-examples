
function diagnose(symptoms) {
  const weights = [15, 60, 29, 15, -15];
  const threshold = 30;
  let score = symptoms.reduce((total, symptom, index) => symptom ? total + weights[index] : total, 0);
  return score >= threshold;
}

function runDiagnosis() {
  const symptoms = [
    document.getElementById('breath').checked,
    document.getElementById('fever').checked,
    document.getElementById('cough').checked,
    document.getElementById('contact').checked,
    document.getElementById('over20').checked,
  ];

  const isInfected = diagnose(symptoms);
  const resultEl = document.getElementById('result');

  if (isInfected) {
    resultEl.textContent = 'You may be infected with Coronavirus. Please seek immediate medical attention.';
    resultEl.style.color = 'red';
  } else {
    resultEl.textContent = 'Your risk seems low. Maintain precautions and monitor your health closely.';
    resultEl.style.color = 'green';
  }
}
