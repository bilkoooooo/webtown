import {Mansions} from "../services/mansions.js";
import {FaArrowLeftLong} from "react-icons/fa6";
import {translations} from "../services/translations.js";
import {useContext,} from "react";
import {LanguageDirectionContext} from "../contexts/LanguageDirectionprovider.jsx";
import '../assets/styles/timeline.scss';
import {handleTouchMove, handleTouchStart} from "/src/services/touchEvent.js";

export default function Timeline({currentSlide, sliderRef}) {
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
                <div className={"timeline-date d-flex flex-column align-items-center"}>
                    <div className={"date text-center"}>
                        <span>{date.toLocaleString('en', {month: 'long'})}</span>
                        <br/>
                        <span>{date.getFullYear()}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={"mansionContainer w-auto slider overflow-hidden position-relative"}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             // onTouchEnd={() => handleTouchEnd(sliderRef, currentSlide, isLastSlide, moveSlide, isLTR)}
        >
            <div className="blur"></div>
            <div className="slides d-flex"
                 ref={sliderRef}
                 style={{transform: `translateX(${isLTR ? currentSlide * (-1) : currentSlide}px)`}}
            >
                {Mansions.sort((a, b) => b.date - a.date).map((mansion) => {
                    return (
                        <div key={mansion.id.toString()} className={"col-8 col-lg-3"}
                             style={{transition: '0.4s ease-in-out'}}>
                            {mansionBox(mansion)}
                        </div>
                    )
                })}
            </div>

            {Mansions.slice(0, -1).map((item, index) => {
                const startPosition = `${(100 / (Mansions.length - 1)) * index}%`;
                const endPosition = `${(100 / (Mansions.length - 1)) * (index + 1)}%`;
                return (
                    <div
                        key={`line-${item.id}`}
                        className="absolute timeline-line top-1.5 border-b-2 border-dashed border-gray-300"
                        style={{
                            left: startPosition,
                            right: `${100 - parseInt(endPosition)}%`,
                            bottom: '20px'
                        }}
                    />
                );
            })}
        </div>
    )
}
