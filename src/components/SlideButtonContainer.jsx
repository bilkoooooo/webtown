import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {useContext} from "react";
import {LanguageDirectionContext} from "./LanguageDirectionprovider.jsx";

export default function SlideButtonContainer({currentSlide, isLastSlide, moveSlide}) {
    let {isLTR} = useContext(LanguageDirectionContext);

    const SlideButton = (id, Icon, isActive, direction) => {
        return (
            <div onClick={() => isActive && moveSlide(direction)}
                 id={id}
                 className={`slideBtn d-flex align-items-center justify-content-center cursor-pointer ${isActive ? 'active' : ''}`}>
                <Icon height={"10"}/>
            </div>
        );
    }

    return (
        <div className={'d-inline-flex gap-2'}>
            {isLTR && (<>
                    {SlideButton('left', FaArrowLeftLong, currentSlide, 1)}
                    {SlideButton('right', FaArrowRightLong, !isLastSlide, -1)}
                </>
            )}

            {!isLTR && (
                <>
                    {SlideButton('left', FaArrowLeftLong, !isLastSlide, -1)}
                    {SlideButton('right', FaArrowRightLong, currentSlide, 1)}
                </>
            )}
        </div>
    )
}
