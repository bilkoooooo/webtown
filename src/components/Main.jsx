import Masonry from "./Masonry.jsx";
import Timeline from "./Timeline.jsx";
import Header from "./Header.jsx";
import {TranslationProvider} from "../contexts/TranslationProvider.jsx";
import {useRef, useState} from "react";
import LanguageDirectionSwitchButton from "./LanguageDirectionSwitchButton.jsx";

export default function App() {
    const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const slidesRef = useRef();

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLastSlide, setIsLastSlide] = useState(false);

    const moveSlide = (direction) => {
        const slides = slidesRef.current;

        const slideWidth = slides?.querySelector('.slide')?.offsetWidth || 0;
        const gap = (isMobile ? 1 : 2) * remSize;
        const slideUnit = slideWidth + gap;

        const slideCount = slides?.querySelectorAll('.slide').length;
        const maxOffset = slideCount - (isMobile ? 1 : 3.5);

        const currentPosition = Math.floor(currentSlide / slideUnit);
        let nextSlide = (currentSlide + (slideUnit * direction));

        setIsLastSlide(direction > 0 && currentPosition >= Math.floor(maxOffset));

        setCurrentSlide(nextSlide);
    };

    return (
        <TranslationProvider>
            <LanguageDirectionSwitchButton/>
            <Header currentSlide={currentSlide} isLastSlide={isLastSlide} moveSlide={moveSlide}/>
            <Timeline sliderRef={slidesRef}
                      currentSlide={currentSlide}
                      isLastSlide={isLastSlide}
                      moveSlide={moveSlide}/>
            <Masonry/>
        </TranslationProvider>
    );
}
