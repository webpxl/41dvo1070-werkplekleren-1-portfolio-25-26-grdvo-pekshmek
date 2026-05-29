const textElement = document.querySelector(".job-title");

const phrases = ["GRAFISCH ONTWERPER","UI/UX ONTWERPER", "STUDENT PXL"];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 150;
    if (isDeleting) typeSpeed = 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 1000;
        isDeleting = true;
    }
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex++;
        if (phraseIndex === phrases.length) {
            phraseIndex = 0;
        }
    }

    setTimeout(typeEffect, typeSpeed);
}

if (textElement) {
    typeEffect();
}