import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SlideButtonContainer() {
  const SlideButton = (Icon, func) => {
    return (
      <div onClick={func}
           className={'d-flex align-items-center justify-content-center px-4 py-2 cursor-pointer border border-1 border-white'}>
        <Icon/>
      </div>
    );
  }

  return (
    <div className={'d-inline-flex gap-2'}>
      {SlideButton(FaChevronLeft, () => {})}
      {SlideButton(FaChevronRight, () => {})}
    </div>
  )
}
