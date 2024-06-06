document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.gallery-1').addEventListener('mouseover', handleMouse);
    document.querySelector('.gallery-1').addEventListener('mouseout', handleMouse);

    function handleMouse(event) {
        const imageInteraction = event.target.closest('.image-interaction');
        if (!imageInteraction) return;
        const overlay = imageInteraction.querySelector('.overlay');
        if (!overlay) return;

        if (event.type === 'mouseover' && !overlay.querySelector('.action-button')) {
            overlay.insertAdjacentHTML('beforeend', '<div class="action-button"><p>Know More &rarr;</p></div>');
        } else if (event.type === 'mouseout' && overlay.querySelector('.action-button')) {
            const link = overlay.querySelector('.action-button');
            link.remove();
        }
    }

});
