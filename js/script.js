    const nameProduct = document.querySelector('.title-dispenser');
    const price = document.querySelector('.price');
    const priceCard = document.querySelector('.price-card');
    

    const product = {
        name: nameProduct.innerHTML = "Dispenser e porta escova",
        price: price.innerHTML = "R$ 30,00 À vista",
        priceCard: priceCard.innerHTML = "10x de R$ 3,00",
    }


    // --------------------- javascrip para consultar o endereço via cep ---------------------------

    const preencherDados = (endereco) => {
        let adress = document.querySelector('.adress');
        let discrict = document.querySelector('.district');
        let city = document.querySelector('.city');
        let state = document.querySelector('.state');
        let cod = document.querySelector('.cod');
    
        let deadline = document.querySelector('.deadline');
        let priceShipping = document.querySelector('.price-shipping');
        const shippingBelem = 10;
        const shippingOthersCity = 60;
    
    
        adress.value = endereco.logradouro;
        discrict.value = endereco.bairro;
        city.value = endereco.localidade;
        state.value = endereco.uf;
        cod.value = endereco.ibge;
    
        if(cod.value == "1501402") {
            deadline.value = "Entrega entre 1-2 dias úteis";
            priceShipping.value = shippingBelem;
        } else {
            deadline.value = "Entrega entre 6-10 dias úteis";
            priceShipping.value = shippingOthersCity;
        }
    }
    
    const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep)
    
    const cepCorreiosBrasil = async() => {
        const cep = document.getElementById('shipping-calculator').value;
        const url = `http://viacep.com.br/ws/${cep}/json/`;
    
        document.getElementById('result-cep').style.display = "flex";
    
        if(cepValido(cep)) {
            const dados = await fetch(url);
            const endereco = await dados.json();
            if(endereco.hasOwnProperty('erro')) {
                document.querySelector('.adress').value = "CEP não encontrado";
                document.querySelector('.district').value = "";
                document.querySelector('.city').value = "";
                document.querySelector('.state').value = "";
                document.querySelector('.cod').value = "";
                document.getElementById('container-result-shipping').style.display = "none";
               
            } else {
                return preencherDados(endereco),
                document.getElementById('container-result-shipping').style.display = "block";
            }
        } else {       
            document.querySelector('.adress').value = "CEP não encontrado";
            document.querySelector('.district').value = "";
            document.querySelector('.city').value = "";
            document.querySelector('.state').value = "";
            document.querySelector('.cod').value = "";
            document.getElementById('container-result-shipping').style.display = "none";
        }
    }
    
    document.getElementById('btn-calculator-shipping').addEventListener('click', cepCorreiosBrasil);

    
    // ------------------------------------- Javascript Item-Amount ---------------------------------------

const more = document.getElementById('more');
const less = document.getElementById('less');
let amountShow = document.getElementById('amount-show');
let initalValue = 1;
amountShow.value = initalValue;


function oneMoreItem() {        
    amountShow.value = 1 + initalValue++
    parseFloat(amountShow.value)
    
    console.log(amountShow.value)
}

function oneLessItem() {
    if (amountShow.value  == 0) {
        location.reload()
    }

    amountShow.value = initalValue-- -1
    console.log(amountShow.value)
}

more.addEventListener('click', oneMoreItem);
less.addEventListener('click', oneLessItem);
    

    // ----------------javascript shoppingBag Resumo de pagamento -----------------------


let amountItem = document.getElementById('amount-show');
let valueProduct = document.getElementById('resume-product');
let btnMore = document.getElementById('more');
let btnLess = document.getElementById('less');
let total = document.getElementById('total');

const btnCalculatorShipping = document.getElementById('btn-calculator-shipping'); 

let amountItemNumber = parseFloat(amountItem.value);
let priceProduct = 30.00;
valueProduct.value = priceProduct;

console.log(valueProduct.value)

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

// ------------------------------

