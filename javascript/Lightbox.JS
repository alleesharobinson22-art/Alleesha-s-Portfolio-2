// JavaScript Document
const links = document.querySelectorAll('.lightbox-link');
const overlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document. querySelector('.close-btn'); // New line: finds the x button

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        overlay.style.display = 'flex';
        lightboxImg.src = this.href; 
    });
});
// New logic: Specifically makes the X button close the window
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Keeps your existing "click anywhere to close" logic
overlay.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        overlay.style.display = 'none';
    }
});

