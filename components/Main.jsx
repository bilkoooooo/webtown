import Gallery from "./Gallery";
import Mansionry from "./Mansionry.jsx";
import Header from "./Header.jsx";
import {TranslationProvider} from "./TranslationProvider.jsx";

export default function App() {
  return (
    <TranslationProvider>
      <div>
        <Header/>
        <Mansionry/>
        <Gallery/>
      </div>
    </TranslationProvider>
  );
}
