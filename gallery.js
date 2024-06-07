document.addEventListener('DOMContentLoaded', () => {
    // Selecting the gallery container element with the class 'gallery-1'
    const gallery = document.querySelector('.gallery-1');
    // Add an event listener to the gallery for the 'mouseover' event

    gallery.addEventListener('mouseover', ({ target }) => {
        // Find the nearest parent element with the class 'image-interaction'
        // and then select its child element with the class 'overlay'

        const overlay = target.closest('.image-interaction')?.querySelector('.overlay');
        // If the overlay exists and does not already contain an element with the class 'action-button'

        if (overlay && !overlay.querySelector('.action-button')) {
            // Append the "Know More" link inside the overlay

            overlay.innerHTML += '<div class="action-button"><p>Know More &rarr;</p></div>';
        }
    });
    // Add an event listener to the gallery for the 'mouseout' event

    gallery.addEventListener('mouseout', ({ target }) => {
        // Find the nearest parent element with the class 'image-interaction'
        // and then select its child element with the class 'action-button'
        // If the action button exists, remove it from the DOM

        target.closest('.image-interaction')?.querySelector('.action-button')?.remove();
    });
});

