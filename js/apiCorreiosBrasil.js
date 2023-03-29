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
            preencherDados(endereco);
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