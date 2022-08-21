export const projects = [
  {
    title: 'Pixel Art',
    startDate: '2020',
    description:
      'A fun project to supply a way for anyone to do simple pixel art right in their browser. Be it for a mockup or to make a work of art, this project gives that possibility. This project was made to learn the underlying usages of Javascript to manipulate the DOM and using event listeners.',
    images: ['/portfolio/pixel-art/pixel-art.jpg'],
    url: 'https://namhnguy.github.io/etch-a-sketch/',
    technologies: [
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        name: 'JavaScript',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        name: 'HTML 5',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        name: 'CSS 3',
      },
    ],
  },
  {
    title: 'Todo List',
    startDate: '2021',
    description:
      "This project provide users an ability to set goals for future review. It utilize the MERN stack to provide this. State management is also handled using Redux to share state throughout the components. Axios was used in the frontend to query the database provided by mongoDB to get user's goal data. On the backend, express was used to make the routes to handle CRUD functions to mongoDB. Users are authenticated using JWT to provide a token and check against the database.",
    images: [
      '/portfolio/mern/1.jpg',
      '/portfolio/mern/2.jpg',
      '/portfolio/mern/3.jpg',
    ],
    url: 'https://mernapp-project-antra.herokuapp.com/',
    technologies: [
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        name: 'JavaScript',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        name: 'HTML 5',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        name: 'CSS 3',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        name: 'React',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        name: 'Express',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        name: 'MongoDB',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        name: 'Node.js',
      },
    ],
  },
  {
    title: 'Calculator',
    startDate: '2021',
    description:
      "A calculator that can perform add, subtract, multiply, and division functions. Tried to match similar operate functions as window's calculator. I took up this personal project to learn implementations of basic css, html, and dom manipulation using javascript. ",
    images: ['/portfolio/calculator/1.jpg', '/portfolio/calculator/2.jpg'],
    url: 'https://namhnguy.github.io/calculator/',
    technologies: [
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        name: 'JavaScript',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        name: 'HTML 5',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        name: 'CSS 3',
      },
    ],
  },
  {
    title: 'Logbook ARG',
    startDate: '2021',
    description:
      'This project was made as part of an ARG for a community that enjoys solving mysteries and puzzles. The project itself is hosted on vercel and utilize Next.js framework. For fast deployment of style, Chakra UI was used. Firebase was used as the backend to hold data of puzzle answers.',
    images: ['/portfolio/logbook/1.jpg', '/portfolio/logbook/2.jpg'],
    url: 'https://thetruthmaybeprobably.vercel.app/',
    technologies: [
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        name: 'Next.js',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        name: 'JavaScript',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        name: 'Firebase',
      },
    ],
  },
  {
    title: 'Memory Game',
    startDate: '2021',
    description:
      "A memory game based on popular comic characters. The goal is to click on as many unique images in a row. This project was made using react and functional component. It was made to explore lifecycles using hooks. The challenging part of this project was to store the state and share it with other components while also updating each component's view to match. Hooks such as useState and  useEffect were used. This project also get image data using fetch from an api endpoint.",
    images: ['/portfolio/memory/1.jpg', '/portfolio/memory/2.jpg'],
    url: 'https://namhnguy.github.io/react-memory-game/',
    technologies: [
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        name: 'JavaScript',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        name: 'HTML 5',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        name: 'CSS 3',
      },
      {
        class:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        name: 'React',
      },
    ],
  },
];
