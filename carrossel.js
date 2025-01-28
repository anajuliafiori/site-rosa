const images = document.querySelectorAll('#carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

setInterval(showNextImage, 5000); // Troca automática a cada 5 segundos