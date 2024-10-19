import {translations} from "../src/assets/translations.js";
import {createContext} from "react";

export const TranslationContext = createContext(null);

export const TranslationProvider = ({children}) => (
  <TranslationContext.Provider value={translations}>
    {children}
  </TranslationContext.Provider>
);
