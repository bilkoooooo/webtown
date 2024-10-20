import {useContext} from "react";
import {TranslationContext} from './TranslationProvider.jsx';
import SlideButtonContainer from "./SlideButtonContainer.jsx";
import {FaArrowLeftLong} from "react-icons/fa6";

export default function Header({currentSlide, isLastSlide, moveSlide}) {
    const {viewAllBtnText, headerTitle} = useContext(TranslationContext);

    const seeAllBtn = () => {
        return (
            <div className={"d-flex align-items-center seeAllBtn cursor-pointer"}>
                <FaArrowLeftLong/>
                <span>{viewAllBtnText}</span>
            </div>
        )
    }

    return (
        <header>
            <div className={"d-flex justify-content-between border-bottom mb-pb-17"}>
                {seeAllBtn()}
                <div className={"header-title fs-4"}>
                    {headerTitle}
                </div>
            </div>

            <SlideButtonContainer currentSlide={currentSlide} isLastSlide={isLastSlide} moveSlide={moveSlide}/>
        </header>
    )
}
