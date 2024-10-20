import {Images} from "./images.js";

export default function Gallery() {
    const columns = Array(5).fill(1);

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
        <div className={'row m-0'}>
            {columns.map((col, index) => {
                    return (
                        <div key={index} className={'col m-0 p-0'}>
                            {shuffleArray(shuffleArray(Images)).map((img, index) => (
                                <div key={index} className={"p-2"}>
                                    <img src={img}
                                         className="w-100 gap-1" alt={img}/>
                                </div>
                            ))}
                        </div>
                    );
                }
            )}
        </div>
    )
}
