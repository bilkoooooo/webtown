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
        <>
            <style>
                {`
          .masonry-grid {
            column-count: 2;
            column-gap: 1rem;
            padding: 1rem;
          }
          
          @media (min-width: 768px) {
            .masonry-grid {
              column-count: 3;
            }
          }
          
          @media (min-width: 1024px) {
            .masonry-grid {
              column-count: 4;
            }
          }
          
          .masonry-item {
            break-inside: avoid;
            margin-bottom: 1rem;
          }
          
          .masonry-image {
            display: block;
            width: 100%;
            border-radius: 0.375rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: opacity 0.2s;
          }
          
          .masonry-image:hover {
            opacity: 0.9;
          }
        `}
            </style>

            <div className="container-fluid p-4">
                <div className="masonry-grid">
                    {Images.map((image, index) => (
                        <div key={index} className="masonry-item">
                            <img
                                src={image}
                                alt={image}
                                className="masonry-image"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

    // return  (
    //     <div className={'row m-0'}>
    //         {columns.map((col, index) => {
    //                 return (
    //                     <div key={index} className={'col m-0 p-0'}>
    //                         {shuffleArray(shuffleArray(Images)).map((img, index) => (
    //                             <div key={index} className={"p-2"}>
    //                                 <img src={img}
    //                                      className="w-100 gap-1" alt={img}/>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 );
    //             }
    //         )}
    //     </div>
    // )
}
