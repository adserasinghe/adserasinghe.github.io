function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
    // Force reflow
    void popup.offsetWidth;
    popup.classList.add('active');
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Function to hide popup
function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('active');
    setTimeout(() => {
        popup.style.display = 'none';
        // Restore body scrolling
        document.body.style.overflow = '';
    }, 300);
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup-container');
    popups.forEach(popup => {
        if (event.target === popup) {
            hidePopup(popup.id);
        }
    });
});

// Close popup on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activePopup = document.querySelector('.popup-container.active');
        if (activePopup) {
            hidePopup(activePopup.id);
        }
    }
});