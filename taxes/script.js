function getIRPF(totalIncome, largeFamily) {
    let remainingIncome = totalIncome;
    let tax = 0;

    // Possible mistake 1, wrong values
    FIRST_TAX_LIMIT = 13000;
    SECOND_TAX_LIMIT = 30000;
    LARGE_FAMILY_DISCOUNT = 2500;
    FIRST_STEP_PERCENTAGE = 0.19;
    SECOND_STEP_PERCENTAGE = 0.24;
    THIRD_STEP_PERCENTAGE = 0.30;


    if (remainingIncome <= FIRST_TAX_LIMIT) {
        tax += remainingIncome * FIRST_STEP_PERCENTAGE;
        remainingIncome = 0;
    } else {
        tax += FIRST_TAX_LIMIT * FIRST_STEP_PERCENTAGE;
        remainingIncome -= FIRST_TAX_LIMIT;
    }

    let secondTaxLimit = SECOND_TAX_LIMIT - FIRST_TAX_LIMIT;


    if (remainingIncome > 0) {
        if (remainingIncome <= secondTaxLimit) {
            tax += remainingIncome * SECOND_STEP_PERCENTAGE;
            remainingIncome = 0;
        } else {
            tax += secondTaxLimit * SECOND_STEP_PERCENTAGE;
            remainingIncome -= secondTaxLimit;
        }
    }

    if (remainingIncome > 0) {
        tax += remainingIncome * THIRD_STEP_PERCENTAGE;
    }

    if (largeFamily) {
        tax -= LARGE_FAMILY_DISCOUNT;
    }

    return tax < 0 ? 0 : parseFloat(tax.toFixed(2));
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('taxForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const incomeInput = document.getElementById('income');
        const largeFamilyCheckbox = document.getElementById('largeFamily');
        const messageDiv = document.getElementById('message');

        const totalIncome = parseFloat(incomeInput.value);

        if (isNaN(totalIncome) || totalIncome <= 0) {
            messageDiv.innerHTML = '<div class="error">Enter a valid positive number.</div>';
            return;
        }

        const largeFamily = largeFamilyCheckbox.checked;
        const tax = getIRPF(totalIncome, largeFamily);

        messageDiv.innerHTML = `<div class="result">IRPF Tax: ${tax.toFixed(2)}€</div>`;
    });
});
