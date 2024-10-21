import {Mansions} from "../assets/mansions.js";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {translations} from "../assets/translations.js";
import {useContext, useState} from "react";
import {LanguageDirectionContext} from "./LanguageDirectionprovider.jsx";

export default function Mansionry({moveSlide, currentSlide, isLastSlide, sliderRef}) {
    const {isLTR} = useContext(LanguageDirectionContext);

    const mansionBox = ({id, img, link, title, desc, date}) => {
        return (
            <div className={"slide position-relative"}>
                <div className={"mansionBox d-inline-flex flex-column"}>
                    <img src={img} alt={title} className={"w-100"}/>
                    <div>
                        {title}
                    </div>
                    <div>
                        {desc}
                    </div>

                    <a href={link} className={"text-decoration-none"}>
                        {isLTR ? <FaArrowRightLong/> : <FaArrowLeftLong/>}
                        <span>{translations.viewMoreBtnText}</span>
                    </a>
                </div>

                <div className={"vl"}></div>
                <div className={"d-flex flex-column position-relative align-items-center"}>
                    <div className={"date text-center"}>
                        <span>{date.toLocaleString('en', {month: 'long'})}</span>
                        <br/>
                        <span>{date.getFullYear()}</span>
                    </div>
                </div>
            </div>
        )
    }

    const {handleTouchStart, handleTouchMove, handleTouchEnd} = TouchEvent;


    return (
        <div className={"mansionContainer w-auto slider overflow-hidden position-relative"}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
        >
            <div className="slides d-flex"
                 ref={sliderRef}
                 style={{transform: `translateX(${isLTR ? currentSlide * (-1) : currentSlide}px)`}}
            >
                {Mansions.sort((a, b) => b.date - a.date).map((mansion) => {
                    return (
                        <div key={mansion.id.toString()} className={"col-lg-3 col-sm-9"}>
                            {mansionBox(mansion)}
                            <div className={"hr"}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
