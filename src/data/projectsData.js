const projects = [
  {
    id: 21,
    title: "new road",
    img: "newroad.PNG",
    description: "A travel agency website built with JAM stack",
    type: ["../../images/icons/react.svg", "../../images/icons/gatsbyjs.svg"],
    github: "https://github.com/khoadodk/newroad-gatsby",
    demo: "https://newroad.netlify.app",
  },
  {
    id: 20,
    title: "google pin",
    img: "googlepin.PNG",
    description: "A travel log app with Google Map",
    type: [
      "../../images/icons/react.svg",
      "../../images/icons/graphql.svg",
      "../../images/icons/node.svg",
      "../../images/icons/database.svg",
    ],
    github: "https://github.com/khoadodk/googlepin",
    demo: "https://googlepin-khoado.netlify.app",
  },
  {
    id: 19,
    title: "eLearn",
    img: "elearn.png",
    description: "An online Tutorials and Courses sharing platform",
    type: [
      "../../images/icons/react.svg",
      "../../images/icons/node.svg",
      "../../images/icons/database.svg",
      "../../images/icons/aws.svg",
    ],
    github: "https://github.com/khoadodk/multi-users-app",
    demo: "http://khoado.site",
  },
  {
    id: 18,
    title: "Furniture",
    img: "furniture-store.png",
    description: "An eCommerce store built with Next.js and Semantic UI",
    type: [
      "../../images/icons/react.svg",
      "../../images/icons/node.svg",
      "../../images/icons/database.svg",
    ],
    github: "https://github.com/khoadodk/furniture-store",
    demo: "https://furniture-store.now.sh",
  },
  // {
  //   id: 1000,
  //   title: 'Blog',
  //   img: 'blog.png',
  //   description: 'Programming blog built with Next.js for SEO',
  //   type: [
  //     '../../images/icons/react.svg',
  //     '../../images/icons/node.svg',
  //     '../../images/icons/database.svg',
  //     '../../images/icons/aws.svg'
  //   ],
  //   github: 'https://github.com/khoadodk/blog',
  //   demo: 'http://ec2-54-244-56-122.us-west-2.compute.amazonaws.com'
  // },
  {
    id: 17,
    title: "Book Store",
    img: "ecommerce-mern.png",
    description:
      "A production level eCommerce store with tons of features. Click on Demo for details.",
    type: [
      "../../images/icons/react.svg",
      "../../images/icons/node.svg",
      "../../images/icons/database.svg",
    ],
    github: "https://github.com/khoadodk/ECommerce-MERN",
    demo: "https://bookstore-khoado.herokuapp.com/about",
  },
  // {
  //   id: 16,
  //   title: "MERN Boilerplate",
  //   img: "boilerplateMERN.png",
  //   description:
  //     "Login/register system with Google and Facebook, forgot/reset password and account activation.",
  //   type: [
  //     "../../images/icons/react.svg",
  //     "../../images/icons/node.svg",
  //     "../../images/icons/database.svg",
  //   ],
  //   github: "https://github.com/khoadodk/boilerplate-mern-stack",
  //   demo: "https://obscure-cove-86522.herokuapp.com/",
  // },
  // {
  //   id: 15,
  //   title: 'Party Booking',
  //   img: 'party.png',
  //   description: 'Having a party? Use this app to book your friends.',
  //   type: [
  //     '../../images/icons/react.svg',
  //     '../../images/icons/node.svg',
  //     '../../images/icons/database.svg'
  //   ],
  //   github: 'https://github.com/khoadodk/party-MERN',
  //   demo: 'https://party-khoado.herokuapp.com/'
  // },
  // {
  //   id: 14,
  //   title: 'Medium Clone',
  //   img: 'mediumclone.png',
  //   description:
  //     'This project is made to understand more about React Hooks API',
  //   type: ['../../images/icons/react.svg'],
  //   github: 'https://github.com/khoadodk/medium-clone-hooks',
  //   demo: 'https://khoado-mediumclone.netlify.com'
  // },
  {
    id: 13,
    title: "Kruise",
    img: "kruise.png",
    description: "A UX/UI project for a commercial cruise booking website.",
    type: ["../../images/icons/sass.svg"],
    github: "https://github.com/khoadodk/kruise",
    demo: "https://khoado-kruise.netlify.com",
  },
  // {
  //   id: 12,
  //   title: 'Clothes Store',
  //   img: 'clothesstore.png',
  //   description: 'The landing page of a retail store.',
  //   type: ['../../images/icons/sass.svg'],
  //   github: 'https://github.com/khoadodk/clothesStore',
  //   demo: 'https://clothesstore-khoado.netlify.com/'
  // }
  // {
  //   id: 12,
  //   title: 'Social Forum',
  //   img: 'socialforum.png',
  //   description:
  //     'User can make a post, follow and live chat with other users in this full stack Javascript app.',
  //   type: [
  //     '../../images/icons/js.svg',
  //     '../../images/icons/node.svg',
  //     '../../images/icons/database.svg'
  //   ],
  //   github: 'https://github.com/khoadodk/jsapp-fullstack',
  //   demo: 'https://socialkhoado.herokuapp.com/'
  // },
  // {
  //   id: 11,
  //   title: 'eSurvey',
  //   img: 'esurvey.png',
  //   description:
  //     'Users send emails to their customers and collect the feedback',
  //   type: [
  //     'https://i.ibb.co/g36pFxh/react.png',
  //     'https://i.ibb.co/QDjPf2k/nodejs.png',
  //     'https://i.ibb.co/yPQTsrH/express.png',
  //     'https://i.ibb.co/yftp6XF/mongodb.png'
  //   ],
  //   github: 'https://github.com/khoadodk/esurvey',
  //   demo: 'https://pure-harbor-76603.herokuapp.com/'
  // },
  // {
  //   id: 10,
  //   title: 'Live Chat',
  //   img: 'LiveChat.png',
  //   description: 'Users can chat with real time in the same room',
  //   type: ['../../images/icons/react.svg', '../../images/icons/node.svg'],
  //   github: 'https://github.com/khoadodk/chat-app',
  //   demo: 'https://chat-khoado.netlify.com/'
  // }
  // // {
  //   id: 9,
  //   title: 'K Clothing',
  //   img: 'kclothing.png',
  //   description:
  //     'An E-Commere store, user can add/edit/delete cart and process payment with stripe',
  //   type: [
  //     'https://i.ibb.co/g36pFxh/react.png',
  //     'https://i.ibb.co/sW7zvSW/redux.png',
  //     'https://i.ibb.co/5Lg6mhj/sass.jpg',
  //     'https://i.ibb.co/bgJWxrj/firebase.png'
  //   ],
  //   github: 'https://github.com/khoadodk/k-clothing',
  //   demo: 'https://kclothing.netlify.com/'
  // },
  // {
  //   id: 6,
  //   title: 'budget calculator',
  //   img: 'budgetcal.png',
  //   description: 'Users can edit, add, or delete the expense',
  //   type: ['../../images/icons/react.svg'],
  //   github: 'https://github.com/khoadodk/budget-calculator',
  //   demo: 'https://budgetcal.netlify.com/'
  // }
  // {
  //   id: 7,
  //   title: 'employee info',
  //   img: 'CRUD.png',
  //   description:
  //     'A CRUD app that lets user add, view, edit or delete the employee info',
  //   type: ['../../images/icons/node.svg'],
  //   github: 'https://github.com/khoadodk/CRUD-hbs',
  //   demo: 'https://agile-bastion-41233.herokuapp.com/employee'
  // }
  // {
  //   id: 8,
  //   title: 'electrik store',
  //   img: 'electrikstore.png',
  //   description: 'A Simple E-Commerce Store that lets user filter categories',
  //   type: ['../../images/icons/react.svg'],
  //   github: 'https://github.com/khoadodk/tech-store-react',
  //   demo: 'https://techstore-react.netlify.com'
  // }
  // {
  //     id: 1,
  //     title: "text to speech",
  //     img: "texttospeech.png",
  //     description: "A simple text to speech app using voicerss.org API",
  //     type: "javascript.png",
  //     github: "https://github.com/khoadodk/texttospeech",
  //     demo:"https://texttospeech-khoado.netlify.com/"
  // },
  // {
  //     id: 2,
  //     title: "to do app",
  //     img: "todojs.png",
  //     description: "A to do app that allows users to add, edit or delete tasks",
  //     type: "javascript.png",
  //     github: "https://github.com/khoadodk/todolist-js",
  //     demo:"https://todojs-khoado.netlify.com/"
  // },
  // {
  //     id: 3,
  //     title: "tic tac toe",
  //     img: "tictactoe.png",
  //     description: "A simple tic tac toe game",
  //     // type: "javascript.png",
  //     github: "https://github.com/khoadodk/tictactoe",
  //     demo: "https://tictactoe-khoado.netlify.com/"
  // },
  // {
  //     id: 4,
  //     title: "weather app",
  //     img: "weather.png",
  //     description: "A weather app that shows temp, condition, zone. Toggle temp between C and F ",
  //     type: "javascript.png",
  //     github: "https://github.com/khoadodk/weather-app",
  //     demo: "https://weather-khoado.netlify.com/"
  // },
  // {
  //   id: 5,
  //   title: 'pixabay image finder',
  //   img: 'pixabayimagefinder.png',
  //   description: 'Search images using pixabay API and select amount of images',
  //   type: ['https://i.ibb.co/g36pFxh/react.png'],
  //   github: 'https://github.com/khoadodk/pixabay-image-finder',
  //   demo: 'https://pixabayimagefinder-khoado.netlify.com/'
  // }
];

export default projects;
