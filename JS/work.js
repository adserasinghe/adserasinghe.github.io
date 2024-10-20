function checkScroll() {
    var timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(function(item) {
        var contentBox = item.querySelector('.content');
        var contentPosition = contentBox.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if(contentPosition < screenPosition) {
            contentBox.classList.add('show');
        }
    });
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);