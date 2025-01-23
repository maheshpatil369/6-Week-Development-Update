const emailInput = document.getElementById('emailInput');

const emailOutput = document.getElementById('emailOutput');

emailInput.addEventListener('input', function () {
    emailOutput.textContent = emailInput.value;
});