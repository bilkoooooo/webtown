import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import './App.scss';
import App from "./components/Main.jsx";
import {LanguageDirectionProvider} from "./components/LanguageDirectionprovider.jsx";

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <LanguageDirectionProvider>
            <App/>
        </LanguageDirectionProvider>
    </StrictMode>
);