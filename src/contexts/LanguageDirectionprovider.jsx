import {createContext, useState} from "react";

export const LanguageDirectionContext = createContext(null);
export const LanguageDirectionProvider = ({children}) => {
    const [dir, setDir] = useState(sessionStorage.getItem('dir'));
    const isLTR = dir.toLowerCase() === 'ltr';
    return (
        <LanguageDirectionContext.Provider value={{dir, setDir, isLTR}}>
            {children}
        </LanguageDirectionContext.Provider>
    );
}