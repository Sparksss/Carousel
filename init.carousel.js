const parentElem = document.querySelector('.carousel');
    const back = $('arrow_back');
    const next = $('arrow_next');
    const gallery = parentElem.querySelector('.gallery');

    const slide = new Carousel(gallery, back, next, 50,  760, '760px', '0.5s');

    back.addEventListener('click', () => {
        slide.showSlide(-1);
    });

    next.addEventListener('click', () => {
        slide.showSlide(1);
    });
