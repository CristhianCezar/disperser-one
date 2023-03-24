let currentImageIndex = 0;
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const images = document.getElementsByClassName('slide');
const max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++

    if(currentImageIndex >= max) {
        currentImageIndex = 0;
        }

    images[currentImageIndex].classList.add("selected")
    
}

function backImage() {
    images[currentImageIndex].classList.remove("selected");

    if(currentImageIndex === 0) {
        currentImageIndex = 0;
        }

    if(currentImageIndex > 0) {
    currentImageIndex--
    }

    images[currentImageIndex].classList.add("selected")
}

arrowLeft.addEventListener('click', backImage)
arrowRight.addEventListener('click', nextImage)
