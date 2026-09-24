// Interactive Lightbox Feature for Gallery Images
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-list li');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');

    // Open Lightbox on Image Click
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.querySelector('.caption');
            
            if (img) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxCaption.textContent = caption ? caption.textContent : img.alt;
                lightbox.style.display = 'flex';
            }
        });
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Close Lightbox on Clicking Outside Image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});