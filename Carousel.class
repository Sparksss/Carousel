    class Carousel {
        constructor(elem, startPosition = 0, offsetXElem, widthElem, delay, timeout = 0) {
            this.element = elem;
            this.offsetX = offsetXElem;
            this.currentOffsetElement = 0;
            this.widthElement = widthElem;
            this.delay = delay;
            this.startPosition = startPosition;
            this.timeout = timeout;
            this.elementsOnShow = 1;
            this.totalWidthOfELements = offsetXElem * this.elementsOnShow;
        }

        showSlide(min) {
            this.currentOffsetElement += (this.offsetX * min);
            if (this.currentOffsetElement < 0 || this.currentOffsetElement > this.totalWidthOfELements) {
                this.element.style.right = `${this.startPosition}px`;
                this.currentOffsetElement = 0;
                return;
            }
            // this.element.style.transition = this.delay;
            this.element.style.right = `${this.currentOffsetElement}px`;
        }

    }
