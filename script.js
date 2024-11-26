document.getElementById('tva-form').addEventListener('submit', function (event) {
    class PriceData {
        constructor(ttcPrice, taxRate) {
            this.ttcPrice = Pricetcc;
            this.taxRate = pricetax;
            //calcul prix HT
            this.htP = ttcPrice / (1 + taxRate / 100);;
            //calcul montant taxes
            this.taxAmount = this.ttcPrice - this.htP;
        }
    }
    event.preventDefault();

    const priceTTC = parseFloat(document.getElementById('p').value);
    const taxRate = parseFloat(document.getElementById('t').value);

    if (isNaN(priceTTC) || isNaN(taxRate) || priceTTC <= 0 || taxRate < 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    }

    const priceData = new PriceData(priceTTC, taxRate);



    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = `
        <p><strong>Prix HT :</strong> ${priceData.htPrice.toFixed(2)} €</p>
        <p><strong>Part TVA :</strong> ${priceData.taxAmount.toFixed(2)} €</p>
        <p><strong>Prix TTC :</strong> ${priceData.ttcPrice.toFixed(2)} €</p>
    `;
});