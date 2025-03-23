const stickyHeader = document.querySelector('.container');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        stickyHeader.classList.add('sticky-active');
    } else {
        stickyHeader.classList.remove('sticky-active');
    }
});