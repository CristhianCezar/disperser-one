const more = document.getElementById('more');
const less = document.getElementById('less');
let amountShow = document.getElementById('amount-show');
let initalValue = 1;
amountShow.value = initalValue;


function oneMoreItem() {        
    amountShow.value = 1 + initalValue++
    parseFloat(amountShow.value)
}

function oneLessItem() {
    if (amountShow.value  == 0) {
        location.reload()
    }

    amountShow.value = initalValue-- -1
}

more.addEventListener('click', oneMoreItem);
less.addEventListener('click', oneLessItem);
