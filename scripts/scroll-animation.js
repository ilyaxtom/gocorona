const animatedElements = document.querySelectorAll('.animateElement');

function animate() {
    let windowHeight = window.innerHeight;
    let scrollPosition = window.scrollY;

    animatedElements.forEach(function (element) {
        let elementPosition = element.offsetTop;

        if (scrollPosition > elementPosition - windowHeight + 100) {
            element.classList.add('animated');
        }
    });
}

animate();

window.addEventListener('scroll', function () {
    let windowHeight = window.innerHeight;
    let scrollPosition = window.scrollY;

    animatedElements.forEach(function (element) {
        let elementPosition = element.offsetTop;

        if (scrollPosition > elementPosition - windowHeight + 300) {
            element.classList.add('animated');
        }
    });
});