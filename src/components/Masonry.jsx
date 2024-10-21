import {Images} from "../services/images.js";
import '../assets/styles/masonry.scss';

export default function Masonry() {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));

            // Swap elements array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    return (
        <div className="container-fluid py-4">
            <div className="masonry-container">
                {shuffleArray(Images).map((image, index) => (
                    <div key={index} className="masonry-item">
                        <div className="image-card">
                            <img src={image} alt={image}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
