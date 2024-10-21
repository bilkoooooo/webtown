import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import './assets/styles/App.scss';
import App from "./components/Main";
import {LanguageDirectionProvider} from "./contexts/LanguageDirectionprovider";

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <LanguageDirectionProvider>
            <App/>
        </LanguageDirectionProvider>
    </StrictMode>
);