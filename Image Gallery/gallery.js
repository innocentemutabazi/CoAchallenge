
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-1');
    gallery.addEventListener('mouseover', ({ target }) => {
        const overlay = target.closest('.image-interaction')?.querySelector('.overlay');
        if (overlay && !overlay.querySelector('.action-button')) {
            overlay.innerHTML += '<p class="action-button">Know More &rarr;</p>';
        }
    });
    gallery.addEventListener('mouseout', ({ target }) => {
        target.closest('.image-interaction')?.querySelector('.action-button')?.remove();
    });
});

