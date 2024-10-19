import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import './App.scss';
import App from "./components/Main";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);

// (async () => {
//   const gallery = document.querySelector('.gallery');
//
//
//
//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       // Generate a random index from 0 to i
//       const j = Math.floor(Math.random() * (i + 1));
//
//       // Swap elements array[i] and array[j]
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
//
//
//   const row = document.createElement('div');
//   row.classList.add('row');
//
//   const createColumn = () => {
//     const column = document.createElement('div');
//     column.classList.add('column');
//
//     return column;
//   }
//
//
//   const createImages = (url) => {
//     const img = document.createElement('img');
//     // img.classList.add('');
//     img.src = `./images/${url}`;
//
//     return img;
//   }
//
//   for (let i = 0; i < 5; i++) {
//
//     const column = createColumn();
//     shuffleArray(shuffleArray(images)).forEach((image) => column.append(createImages(image)));
//
//
//     row.append(column);
//   }
//
//   gallery.append(row);
//
// })
