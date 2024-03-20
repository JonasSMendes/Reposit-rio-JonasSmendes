let sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 190;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {

            if (window.innerWidth >= 780) {
                sec.classList.add("show-animate")
            }

        }
        else {
            sec.classList.remove("show-animate")
        }
    })
}


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('header nav a');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);
            if (targetSection) {
                var targetOffset = targetSection.offsetTop;
                scrollToTarget(targetOffset);
            }
        });
    });

    function scrollToTarget(targetOffset) {
        var initialPosition = window.pageYOffset;
        var distance = targetOffset - initialPosition;
        var startTime;
        var duration = 1000;

        function animation(currentTime) {
            if (startTime === undefined) {
                startTime = currentTime;
            }
            var timeElapsed = currentTime - startTime;
            var scrollAmount = ease(timeElapsed, initialPosition, distance, duration);
            window.scrollTo(0, scrollAmount);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

});