let amountItem = document.getElementById('amount-show');
let valueProduct = document.getElementById('resume-product');
let btnMore = document.getElementById('more');
let btnLess = document.getElementById('less');
let total = document.getElementById('total');

const btnCalculatorShipping = document.getElementById('btn-calculator-shipping'); 

let amountItemNumber = parseFloat(amountItem.value);
let priceProduct = 30.00;
valueProduct.value = priceProduct;

function moreValueProduct() {
   let resutOperation = priceProduct + priceProduct * amountItemNumber++;
    valueProduct.value = resutOperation.toFixed(2).replace('.', ',');
}

function lessValueProduct() {
    let resutOperation = priceProduct * amountItemNumber-- -priceProduct;
    valueProduct.value = resutOperation.toFixed(2).replace('.' , ',');
}

async function setPriceShipping() {
    let valueShipping = document.getElementById('value-shipping');
    valueShipping.value = await resolveAfter3Seconds();   
}

function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                document.getElementById('price-shipping').value.replace('.', ',')
            );
        }, 3000);
    });
}

async function setTotal() {
    let total = document.getElementById('total');
    let resumeProduct = document.getElementById('resume-product');
    let resultValueShipping = await resolveAfter5Seconds();
    let totalValue = parseInt(resultValueShipping) + parseInt(resumeProduct.value);
    total.value = `R$ ${totalValue.toFixed(2)}`;

    if(total.value === "R$ NaN") {
        total.value = "R$ 00,00";
    }
}

function resolveAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                document.getElementById('value-shipping').value
                );
            }, 3500);
        });
    }
    


    btnMore.addEventListener('click', moreValueProduct);
    btnLess.addEventListener('click', lessValueProduct);
    btnCalculatorShipping.addEventListener('click', setPriceShipping);

    btnCalculatorShipping.addEventListener('click', setTotal);
    btnMore.addEventListener('click', setTotal);
    btnLess.addEventListener('click', setTotal);
