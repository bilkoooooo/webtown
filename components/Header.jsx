import {useContext} from "react";
import {TranslationContext} from './TranslationProvider.jsx';

export default function Header() {
  const {viewAllBtnText} = useContext(TranslationContext);

  console.log(viewAllBtnText);

  const seeAllBtn = () => {
    return (
      <div>
        <img src={'./src/assets/backArrow.png'}/>
        <span>
          {viewAllBtnText}
        </span>
      </div>
    )
  }

  return (
    <div>
      {seeAllBtn()}
    </div>
  )
}
