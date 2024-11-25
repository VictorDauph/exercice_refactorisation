// script.js

let total = 0;
function calc(x, y, z) {
    let result = x + y + z;
    return result;
}

function tva(price, rate) {
    return price * (rate / 100);
}

// Calculer la somme de trois nombres
let sum = calc(10, 20, 30);
console.log("Sum is: " + sum);

// Calculer la TVA pour deux produits
let pr1 = 100;
let pr2 = 200;
let vat1 = tva(pr1, 20);
let vat2 = tva(pr2, 20);
console.log("VAT for product 1: " + vat1);
console.log("VAT for product 2: " + vat2);

// Calculer le total avec TVA
total = pr1 + vat1 + pr2 + vat2;
console.log("Total with VAT: " + total);
