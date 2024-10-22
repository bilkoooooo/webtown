import {Mansions} from "../services/mansions.js";
import {FaArrowLeftLong} from "react-icons/fa6";
import {translations} from "../services/translations.js";
import '../assets/styles/timeline.scss';
import {handleTouchMove, handleTouchStart} from "/src/services/touchEvent.js";
import {useContext, useEffect, useState} from "react";
import {LanguageDirectionContext} from "/src/contexts/LanguageDirectionprovider.jsx";

export default function Timeline({currentSlide, sliderRef, isLastSlide}) {
    const [hrStyle, setHrStyle] = useState({});
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const {isLTR} = useContext(LanguageDirectionContext);

    const mansionBox = ({img, link, title, desc, date}) => {
        return (
            <div className={"slide position-relative"}>
                <div className={"mansionBox d-inline-flex flex-column"}>
                    <img src={img} alt={title} className={"w-100"}/>
                    <div>
                        {title}
                    </div>
                    <div className="overflow-hidden elipsis" style={{height: 120}}>
                        {desc}
                    </div>

                    <a href={link} className={"text-decoration-none py-2"}>
                        <FaArrowLeftLong/>
                        <span>{translations.viewMoreBtnText}</span>
                    </a>
                </div>

                <div className={"vl"}></div>
                <div className={"d-flex flex-column align-items-center"}>
                    <div className={"date text-center"}>
                        <span>{date.toLocaleString('en', {month: 'long'})}</span>
                        <br/>
                        <span>{date.getFullYear()}</span>
                    </div>
                </div>
            </div>
        )
    }


    useEffect(() => {
        const slider = sliderRef.current;

        const slideWidth = slider?.querySelector('.slide')?.offsetWidth || 0;
        const gap = (isMobile ? 1 : 2) * remSize;
        const hrStyle = {width: ((slideWidth + gap) * (slider?.querySelectorAll('.slide').length - 1))};

        if (Math.abs(currentSlide) === 0) {
            if (isLTR) {
                hrStyle.marginLeft = slideWidth / 2;
                hrStyle.left = 0;
            } else {
                hrStyle.marginRight = slideWidth / 2;
                hrStyle.right = 0;
            }
        }

        if (isLastSlide) {
            if (isLTR) {
                hrStyle.right = '33%';
            } else {
                hrStyle.marginRight = slideWidth / 2;
                hrStyle.left = '33%';
            }
        }

        setHrStyle(hrStyle);

    }, [isLTR, currentSlide]);

    return (
        <div className={"mansionContainer w-auto slider overflow-hidden position-relative"}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
            // onTouchEnd={() => handleTouchEnd(sliderRef, currentSlide, isLastSlide, moveSlide, isLTR)}
        >
            <div className="blur"></div>
            <div className="slides d-flex"
                 ref={sliderRef}
                 style={{transform: `translateX(${isLTR ? -currentSlide : currentSlide}px)`}}>
                {Mansions.sort((a, b) => b.date - a.date).map((mansion) => {
                    return (
                        <div key={mansion.id.toString()} className={"col-8 col-lg-3"}>
                            {mansionBox(mansion)}
                        </div>
                    )
                })}
            </div>
            <div className="hr" style={hrStyle}/>
        </div>
    )
}
