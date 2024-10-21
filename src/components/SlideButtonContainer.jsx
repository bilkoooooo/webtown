import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {useContext} from "react";
import {LanguageDirectionContext} from "../contexts/LanguageDirectionprovider.jsx";

export default function SlideButtonContainer({currentSlide, isLastSlide, moveSlide}) {
    let {isLTR} = useContext(LanguageDirectionContext);

    const SlideButton = (id, Icon) => {
        const isLeftBtn = id === 'left';
        let isActive = isLeftBtn ? !isLastSlide : currentSlide;
        let direction = isLeftBtn ? -1 : 1;

        if (isLTR) {
            isActive = isLeftBtn ? currentSlide : !isLastSlide;
            direction = isLeftBtn ? 1 : -1;
        }

        return (
            <div onClick={() => isActive && moveSlide(direction)}
                 id={id}
                 className={`slideBtn d-flex align-items-center justify-content-center user-select-none cursor-pointer ${isActive ? 'active' : ''}`}>
                <Icon/>
            </div>
        );
    }

    return (
        <div id="slide-button-container" className={'d-none d-lg-inline-flex gap-2'}>
            {SlideButton('left', FaArrowLeftLong)}
            {SlideButton('right', FaArrowRightLong)}
        </div>
    )
}
