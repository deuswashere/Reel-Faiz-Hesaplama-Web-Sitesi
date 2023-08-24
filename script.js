document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateRealInterest);

    function calculateRealInterest() {
        const nominalInterest = parseFloat(document.getElementById("nominalInterest").value);
        const inflationRate = parseFloat(document.getElementById("inflationRate").value);

        if (!isNaN(nominalInterest) && !isNaN(inflationRate)) {
            const realInterest = ((1 + (nominalInterest / 100)) / (1 + (inflationRate / 100)) - 1) * 100;
            const resultContainer = document.getElementById("result");
            resultContainer.innerHTML = `Reel Faiz: ${realInterest.toFixed(2)}%`;
        } else {
            alert("Lütfen geçerli sayılar girin.");
        }
    }
});

