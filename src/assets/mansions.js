import {Images} from '../components/images.js'

const getRandomYearAndMonth = (startYear = 2000, endYear = 2025) => {
    // Generate a random year within the specified range
    const randomYear = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;

    // Generate a random month (1 to 12)
    const randomMonth = Math.floor(Math.random() * 12) + 1;

    return new Date(randomYear, randomMonth);
}

export const Mansions = [
    {
        id: 1,
        img: Images[0],
        link: '/?id=1',
        title: 'víz',
        desc: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
        date: getRandomYearAndMonth()
    },

    {
        id: 2,
        img: Images[1],
        link: '/?id=2',
        title: 'víz3',
        desc: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
        date: getRandomYearAndMonth()
    },

    {
        id: 3,
        img: Images[2],
        link: '/?id=2',
        title: 'víz3',
        desc: 'Feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et...',
        date: getRandomYearAndMonth()
    },
    {
        id: 4,
        img: Images[3],
        link: '/?id=2',
        title: 'víz3',
        desc: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
        date: getRandomYearAndMonth()
    },
    {
        id: 5,
        img: Images[4],
        link: '/?id=2',
        title: 'víz3',
        desc: 'Feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et...',
        date: new Date()
    },
    {
        id: 6,
        img: Images[1],
        link: '/?id=2',
        title: 'víz3',
        desc: 'Feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et...',
        date: getRandomYearAndMonth()
    },

    {
        id: 7,
        img: Images[1],
        link: '/?id=2',
        title: 'víz3',
        desc: 'Feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et...',
        date: getRandomYearAndMonth()
    }
];