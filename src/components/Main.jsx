import Gallery from "./Gallery.jsx";
import Mansionry from "./Mansionry.jsx";
import Header from "./Header.jsx";
import {TranslationProvider} from "./TranslationProvider.jsx";
import {useContext, useRef, useState} from "react";
import LanguageDirectionSwitchButton from "./LanguageDirectionSwitchButton.jsx";
import {LanguageDirectionContext, LanguageDirectionProvider} from "./LanguageDirectionprovider.jsx";

export default function App() {
    const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const slidesRef = useRef();

    const isMobile = false;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const langDir = useContext(LanguageDirectionContext);

    const moveSlide = (direction) => {
        console.log(langDir.isLTR);

        // if (langDir.isLTR) {
        //     direction = direction * (-1);
        // }

        const slides = slidesRef.current;

        const slideWidth = slides?.querySelector('.slide')?.offsetWidth || 0;
        const gap = (isMobile ? 1 : 2) * remSize;
        const slideUnit = slideWidth + gap;

        const slideCount = slides?.querySelectorAll('.slide').length;
        const maxOffset = slideCount - (isMobile ? 1 : 3.5);

        const currentPosition = Math.floor(currentSlide / slideUnit);
        const nextSlide = currentSlide + (slideUnit * -direction);

        setIsLastSlide(-direction > 0 && currentPosition >= Math.floor(maxOffset));

        setCurrentSlide(nextSlide);
    };

    return (
            <TranslationProvider>
                <LanguageDirectionSwitchButton/>
                <Header currentSlide={currentSlide} isLastSlide={isLastSlide} moveSlide={moveSlide}/>
                <Mansionry moveSlide={moveSlide} sliderRef={slidesRef} currentSlide={currentSlide}
                           isLastSlide={isLastSlide}/>
                <Gallery/>
            </TranslationProvider>
    );
}
