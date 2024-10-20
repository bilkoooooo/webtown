import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";

export default function SlideButtonContainer({currentSlide, isLastSlide, moveSlide}) {

    const SlideButton = (id, Icon, isActive) => {
        return (
            <div onClick={() => isActive && moveSlide(id === 'right' ? 1 : -1)}
                 id={id}
                 className={`slideBtn d-flex align-items-center justify-content-center cursor-pointer ${isActive ? 'active' : ''}`}>
                <Icon height={"10"}/>
            </div>
        );
    }

    return (
        <div className={'d-inline-flex gap-2'}>
            {SlideButton('left', FaArrowLeftLong, !isLastSlide)}
            {SlideButton('right', FaArrowRightLong, currentSlide)}
        </div>
    )
}
