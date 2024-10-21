import {useState} from "react";

export default function TouchEvent() {

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart === 0 || touchEnd === 0) return;

        const swipeDistance = touchStart - touchEnd;
        const minSwipeDistance = 50; // Minimum distance for swipe to register
        const slideWidth = sliderRef.current?.offsetWidth || 0;

        const slideAmount = Math.floor(-swipeDistance / slideWidth * 100);

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            // Swipe right to left (negative direction)
            if (swipeDistance > 0) {
                currentSlide && moveSlide(slideAmount > 50 ? 2 : 1);
            }
            // Swipe left to right (positive direction)
            else {
                !isLastSlide && moveSlide(slideAmount > 50 ? -2 : -1);
            }
        }
        setTouchStart(0);
        setTouchEnd(0);
    };

    return {handleTouchStart, handleTouchMove, handleTouchEnd}
}
