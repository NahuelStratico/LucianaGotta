const slidershowImages = document.querySelectorAll('.intro .slidershow-img');

const nextImageDelay = 3000;
let currentImageCounter = 0;

// slidershowImages[currentImageCounter].style.display = "block";
slidershowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage(){
    // slidershowImages[currentImageCounter].style.display = "none";
    // slidershowImages[currentImageCounter].style.opacity = 0;
    slidershowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;
    setTimeout(() => {
        slidershowImages[tempCounter].style.opacity = 0;
    }, 1000);
    currentImageCounter = (currentImageCounter + 1) % slidershowImages.length;
    // slidershowImages[currentImageCounter].style.display = "block";
    slidershowImages[currentImageCounter].style.opacity = 1;
    slidershowImages[currentImageCounter].style.zIndex = -1;
}


// Mobile
const slidershowImagesMobile = document.querySelectorAll('.intro .slidershow_img-mobile');

let currentImageCounterMobile = 0;

setInterval(nextImageMobile, nextImageDelay);

function nextImageMobile(){
    slidershowImagesMobile[currentImageCounterMobile].style.zIndex = -2;
    const tempCounter = currentImageCounterMobile;
    setTimeout(() => {
        slidershowImagesMobile[tempCounter].style.opacity = 0;
    }, 1000);
    currentImageCounterMobile = (currentImageCounterMobile + 1) % slidershowImagesMobile.length;
    slidershowImagesMobile[currentImageCounterMobile].style.opacity = 1;
    slidershowImagesMobile[currentImageCounterMobile].style.zIndex = -1;
}
