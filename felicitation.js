let currentSlide = 1;

    function showSlide(n) {
        const slides = document.querySelectorAll('.images img');
        if (n > slides.length) {
            currentSlide = 1;
        } else if (n < 1) {
            currentSlide = slides.length;
        } else {
            currentSlide = n;
        }

        const marginLeftValue = (currentSlide - 1) * -100 + '%';
        document.querySelector('.images').style.marginLeft = marginLeftValue;
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }