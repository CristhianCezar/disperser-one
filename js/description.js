const description = document.getElementById('description');
const datasheet = document.getElementById('datasheet');
const linkDescription = document.getElementById('btn-description');
const linkDatasheet = document.getElementById('btn-datasheet');

function chargeDatasheet() {
    description.style.display = "none";
    datasheet.style.display = "block";
}

function chargeDescription() {
    description.style.display = "block";
    datasheet.style.display = "none";
}

linkDatasheet.addEventListener('click', chargeDatasheet);
linkDescription.addEventListener('click', chargeDescription);



