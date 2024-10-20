import Gallery from "./Gallery.jsx";
import Mansionry from "./Mansionry.jsx";
import Header from "./Header.jsx";
import {TranslationProvider} from "./TranslationProvider.jsx";
import {useRef, useState} from "react";

export default function App() {
    const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const slidesRef = useRef();

    const isMobile = false;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLastSlide, setIsLastSlide] = useState(false);

    const moveSlide = (direction) => {

        const slidesEl = slidesRef.current;

        const mansionBoxes = slidesEl?.querySelectorAll('.slide');
        const mansionBoxCount = mansionBoxes.length;

        const mansionBoxWidth = mansionBoxes[0].offsetWidth;
        const spaceBetweenElements = (isMobile ? 1 : 2) * remSize;

        const mansionBoxAndSpaceWidth = mansionBoxWidth + spaceBetweenElements;

        const maxSlideIndex = mansionBoxCount - (isMobile ? 1 : 3.5);

        const currentIndex = Math.floor(currentSlide / mansionBoxAndSpaceWidth);

        setCurrentSlide((prevSlide) => {
            const nextSlide = prevSlide + (mansionBoxAndSpaceWidth * -direction);

            setIsLastSlide(-direction > 0 && currentIndex >= Math.floor(maxSlideIndex));

            return nextSlide;
        });
    };

    return (
        <TranslationProvider>
            <Header currentSlide={currentSlide} isLastSlide={isLastSlide} moveSlide={moveSlide}/>
            <Mansionry sliderRef={slidesRef} currentSlide={currentSlide}/>
            <Gallery/>
        </TranslationProvider>
    );
}
