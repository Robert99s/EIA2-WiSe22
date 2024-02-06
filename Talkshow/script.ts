document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.slideshow-image');
    let index = 0;

    function changeImage() {
        images.forEach(image => {
            image.style.display = 'none';
        });

        index = (index + 1) % images.length;
        images[index].style.display = 'block';

        setTimeout(changeImage, 3000); // Wechselt alle 3 Sekunden das Bild
    }

    changeImage();
});
