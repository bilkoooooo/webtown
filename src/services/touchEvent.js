let touchStart = 0;
let touchEnd = 0;

export const handleTouchStart = (e) => {
    touchStart = (e.targetTouches[0].clientX);
};

export const handleTouchMove = (e) => {
    touchEnd = (e.targetTouches[0].clientX);
};

export const handleTouchEnd = (sliderRef, currentSlide, isLastSlide, moveSlide, isLTR) => {
    if (touchStart === 0 || touchEnd === 0) {
        return;
    }

    const swipeDistance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const slideWidth = sliderRef.current?.offsetWidth || 0;

    // const slideAmount = Math.floor(-swipeDistance / slideWidth * 100);

    if (Math.abs(swipeDistance) > minSwipeDistance) {
        const isPositive = swipeDistance > 0;
        let direction = isPositive ? 1 : -1;

        if (isLTR) {
            direction = isPositive ? -1 : 1;
        }

        if (isPositive) {
            isLTR && !isLastSlide && moveSlide(direction);
            !isLTR && currentSlide && moveSlide(direction);
        } else {
            isLTR && currentSlide && moveSlide(direction);
            !isLTR && !isLastSlide && moveSlide(direction);
        }
    }
    touchStart = 0;
    touchEnd = 0;
};

