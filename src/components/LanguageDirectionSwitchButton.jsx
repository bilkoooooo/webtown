import {useContext} from "react";
import {TranslationContext} from "../contexts/TranslationProvider.jsx";
import {LanguageDirectionContext} from "../contexts/LanguageDirectionprovider.jsx";

export default function LanguageDirectionSwitchButton() {
    const translation = useContext(TranslationContext);
    let {dir, setDir} = useContext(LanguageDirectionContext);
    const onChangeLanguageDir = () => {
        const dir = sessionStorage.getItem('dir') === 'rtl' ? 'ltr' : 'rtl';

        sessionStorage.setItem('dir', dir);
        document.querySelector('html').dir = dir;

        setDir(dir);
    }

    return (
        <button className={"pill btn btn-sm btn-primary mb-3"} onClick={onChangeLanguageDir}>
            {translation.changeLangBn} {dir.toUpperCase()}
        </button>
    )
}