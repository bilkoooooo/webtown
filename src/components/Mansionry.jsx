import {Mansions} from "../assets/mansions.js";
import {FaArrowLeftLong} from "react-icons/fa6";
import {translations} from "../assets/translations.js";

export default function Mansionry({currentSlide, sliderRef}) {
    const mansionBox = ({id, img, link, title, desc, date}) => {
        return (
            <div key={id.toString()} className={"d-inline-block slide "}>
                <div className={"mansionBox d-inline-flex flex-column"}>
                    <img src={img} alt={title} className={"w-100"}/>
                    <div>
                        {title}
                    </div>
                    <div>
                        {desc}
                    </div>

                    <a href={link} className={"text-decoration-none"}>
                        <FaArrowLeftLong/>
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

    return (
        <div className={"mansionContainer w-auto slider overflow-hidden position-relative"}>
            <div className="slides justify-content-end"
                 ref={sliderRef}
                 style={{transform: `translateX(${currentSlide}px)`}}
            >
                {Mansions.sort((a, b) => a.date - b.date).map((mansion) => mansionBox(mansion))}
            </div>
            <div className={"hr"}></div>
        </div>
    )
}
