import mobile from "../public/mobile.json";
import react from "../public/react.json";
import backend from "../public/back-end.json";
import common from "../public/common.json";

export const services = [
  {
    id: 1,
    title: "front-end",
    services: [
      "Develop responsive and user-friendly user interfaces using modern web technologies such as React, Next, Tailwind CSS, and Bootstrap.",
      "Optimize web performance to ensure fast page load times and smooth user experiences.",
      "Implement accessibility best practices to ensure that web applications are usable by people with disabilities.",
    ],
    lottie: react,
    images: [
      "/images/skills/React.png",
      "/images/skills/Next.png",
      "/images/skills/Tailwind.png",
      "/images/skills/Redux.png",
    ],
    small: true,
  },
  {
    id: 2,
    title: "back-end",
    services: [
      "Build scalable and secure RESTful APIs using Node.js, Express, and MongoDB.",
      "Implement authentication and authorization systems using industry-standard protocols such as OAuth2 and JWT.",
      "Develop serverless applications using AWS Lambda and API Gateway.",
    ],
    lottie: backend,
    images: [
      "/images/skills/node.png",
      "/images/skills/express.png",
      "/images/skills/Next.png",
      "/images/skills/mongodb.png",
    ],

    small: false,
  },

  {
    id: 3,
    title: "mobile apps",
    services: [
      "Build cross-platform mobile applications using React Native and Expo.",
      "Implement native device features such as camera, geolocation, and push notifications.",
      "Optimize mobile performance to ensure fast startup times and smooth user experiences.",
    ],
    lottie: mobile,
    images: ["/images/skills/native.png", "/images/skills/Tailwind.png"],
    small: false,
  },

  {
    id: 4,
    title: "Common Scenarios",
    services: [
      "Design and develop custom web and mobile applications for e-commerce, blog, portfolio, and small business scenarios.",
      "Implement responsive designs to ensure that applications look great on all devices.",
      "Develop custom features such as authentication, authorization, and payment processing to fit the specific needs of each scenario.",
      "Optimize applications for search engines and implement SEO strategies to increase visibility and reach.",
      "Integrate with third-party services such as social media platforms, Google Maps, and payment gateways to expand the functionality of applications.",
      "Develop progressive web applications (PWAs) and hybrid mobile applications using Next.js and React Native to ensure a seamless user experience across all devices.",
      "Provide ongoing maintenance and support to ensure that applications are secure and up-to-date.",
    ],
    lottie: common,
    small: true,
  },
];

export const skills = [
  {
    id: 1,
    name: "html",
    level: "90%",
    img: "/images/skills/HTML.png",
  },
  {
    id: 2,
    name: "css",
    level: "90%",
    img: "/images/skills/CSS.png",
  },
  {
    id: 3,
    name: "java script",
    level: "80%",
    img: "/images/skills/JS.png",
  },
  {
    id: 3,
    name: "type script",
    level: "70%",
    img: "/images/skills/TypeScript.png",
  },
  {
    id: 4,
    name: "react js",
    level: "90%",
    img: "/images/skills/React.png",
  },
  {
    id: 5,
    name: "next js",
    level: "90%",
    img: "/images/skills/Next.png",
  },
  {
    id: 6,
    name: "redux toolkit",
    level: "80%",
    img: "/images/skills/Redux.png",
  },
  {
    id: 7,
    name: "bootstrap",
    level: "70%",
    img: "/images/skills/Bootstrap.png",
  },
  {
    id: 8,
    name: "Tailwind",
    level: "90%",
    img: "/images/skills/Tailwind.png",
  },
  {
    id: 9,
    name: "sass",
    level: "70%",
    img: "/images/skills/Sass.png",
  },
  {
    id: 10,
    name: "chakra ui",
    level: "70%",
    img: "/images/skills/chakra-ui.png",
  },
  {
    id: 11,
    name: "material ui",
    level: "70%",
    img: "/images/skills/material-ui.png",
  },
  {
    id: 12,
    name: "node js",
    level: "75%",
    img: "/images/skills/node.png",
  },
  {
    id: 13,
    name: "express js",
    level: "85%",
    img: "/images/skills/express.png",
  },
  {
    id: 14,
    name: "wordporess",
    level: "75%",
    img: "/images/skills/wordpress.png",
  },
  {
    id: 15,
    name: "mongodb",
    level: "80%",
    img: "/images/skills/mongodb.png",
  },
  {
    id: 16,
    name: "postgreSQL",
    level: "75%",
    img: "/images/skills/postgresql.png",
  },
  {
    id: 17,
    name: "firebase",
    level: "80%",
    img: "/images/skills/FireBase.png",
  },
  {
    id: 18,
    name: "npm",
    level: "80%",
    img: "/images/skills/NPM.png",
  },
  {
    id: 19,
    name: "git hub",
    level: "70%",
    img: "/images/skills/Git hub.png",
  },
  {
    id: 20,
    name: "react native",
    level: "75%",
    img: "/images/skills/native.png",
  },
];

export const certificates = [
  {
    id: "c1",
    name: "google project management",
    icon: "/images/google.png",
    img: "/images/min.JPG",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/AY8F2BJLHAB5",
  },
  {
    id: "c2",
    name: "meta frontend developer",
    icon: "/images/Meta.png",
    img: "/images/min2.JPG",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/A3MKYTPLGJ28",
  },
  {
    id: "c3",
    name: "meta react native",
    icon: "/images/Meta.png",
    img: "/images/min3.JPG",
    link: "https://www.coursera.org/account/accomplishments/specialization/G8XCADNXZDGR",
  },
];

export const projects = [
  {
    id: "1",
    name: "Fitness compass",
    img: "/images/compass-fitness-min.png",
    pull: true,
    overView:
      "This is my first project,here we can search for different meals according to our caloric needs,we can also filtiring the results using an advanced search option.so if want a certain cusine we can explicitly choose that,or if have some kind of intolerance to food ,so we can specify that also.There is a right side bar for calculating our caloric needs according to our informations.The results are shown in beautiful cards whith an image and more info to see in a pop up modal that holds all the information about the meal we choose",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "RAPID API"],
    demo: "https://ammar-1990.github.io/compass-project/",
    code: "https://github.com/ammar-1990/compass-project",
  },
  {
    id: "2",
    name: "E-commerce",
    img: "/images/js-e-commerce-min.png",
    pull: false,
    overView:
      "This is my second project,here we can search for different products and items ,and adding them to the cart with a full control of increasing decreasing the amount of choosen items and deleting them partialy or totally .The data is fully dynamic through a third party API.The items are shown in nice cards with images ,info,and see more button to show additional informations in a pop up modal",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "RAPID API", "LOCAL STORAGE"],
    demo: "https://ammar-1990.github.io/e-commerce/",
    code: "https://github.com/ammar-1990/e-commerce",
  },
  {
    id: "3",
    name: "Lost pets",
    img: "/images/lost-pets-min.png",
    pull: false,
    overView:
      "In this site we can register new users ,sign in and out.The whole idea of this site is to register and share lost or found animals which we want to find thier owners .We can do that by posting new animal info on a shared wall between the users specifying an image and additional details of the animal .The users then can interact with each other through different types of messages that track the state of the animal.Either the animal is found or not yet ,the result would be tracked and saved in the site",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "LOCAL STORAGE"],
    demo: "https://ammar-1990.github.io/lost-pets/",
    code: "https://github.com/ammar-1990/lost-pets",
  },
  {
    id: "4",
    name: "React e-commerce",
    img: "/images/yellow-e-commerce-min.png",
    pull: true,
    overView:
      "A fully responsive E-commerce web site with nice and beautiful colors , layout,and a lot of products illustrations having the ability to show ,swipe and filter them properly .This project was built using React js ,Swiper js , Framer motion , and Sass",
    techStack: ["REACT JS", "FRAMER MOTION", "SWIPER", "SASS"],
    demo: "https://ammar-1990.github.io/react-e-commerce-app/",
    code: "https://github.com/ammar-1990/react-e-commerce-app",
  },
  {
    id: "5",
    name: "Fitness club",
    img: "/images/fitness-club-min.png",
    pull: true,
    overView:
      "A fully responsive Fitness-club web site with nice and beautiful colors , layout,and many images and illustrations that describe the environment and the sevices of the club.This project was built using React js ,Framer motion and Sass",
    techStack: ["REACT JS", "FRAMER MOTION", "SASS"],
    demo: " https://ammar-1990.github.io/fitness-react/",
    code: "https://github.com/ammar-1990/fitness-react",
  },
  {
    id: "6",
    name: "Admin dashboard",
    img: "/images/dashboard-min.png",
    pull: false,
    overView:
      "Fully responsive dashboard web site with beautiful colors and layout,having the ability to switch between light and dark mode.This project was built using React js ",
    techStack: ["REACT JS"],
    demo: "https://ammar-1990.github.io/react-dashboard/",
    code: "https://github.com/ammar-1990/react-dashboard",
  },
  {
    id: "7",
    name: "Todo list",
    img: "/images/todo-list-min.png",
    pull: false,
    overView:
      "Basic Todo project with the ability to add ,edit , remove and filter the  data with nice animations and a good layout .The data is stored in the local storage of the browser and managed with Redux toolkit",
    techStack: ["REACT JS", "REDUX TOOLKIT", "FRAMER MOTION", "LOCAL STORAGE"],
    demo: "https://ammar-1990.github.io/redux-react-todo/",
    code: "https://github.com/ammar-1990/redux-react-todo",
  },
  {
    id: "8",
    name: "Redux e-commerce",
    img: "/images/redux-e-commerce-min.png",
    pull: true,
    overView:
      "Fully responsive E-commerce project with a fully functional cart to add ,remove and edit the state of our choosen products .We can easily navigate between differnt pages and hit to the details page of the product with nice animated transitions.This project was built using React js ,Redux toolkit,Framer motion and Reacr Router Dom",
    techStack: [
      "REACT JS",
      "REDUX TOOLSKIT",
      "FRAMER MOTION",
      "REACT ROUTER-DOM",
    ],
    demo: "https://ammar-1990.github.io/react-redux-ecommerce/",
    code: "https://github.com/ammar-1990/react-redux-ecommerce",
  },
  {
    id: "9",
    name: "Netflix clone",
    img: "/images/netflix-clone-min.png",
    pull: true,
    overView:
      "A NETFLIX clone with the ability to sign in and out using  firebase database ,the site is fully responsive with a lot of dynamic movies informations using third party APIs,having the ability to access detailed info about each movie.the project was built using React js ,React Router Dom ,Firebase ",
    techStack: ["REACT JS", "THIRD PARTY API", "FIREBASE ", "REACT ROUTER-DOM"],
    demo: "https://ammar-1990.github.io/netflix-react-clone/",
    code: "https://github.com/ammar-1990/netflix-react-clone",
  },
  {
    id: "10",
    name: "Facebook clone",
    img: "/images/facebook-clone-min.png",
    pull: false,
    overView:
      "In this Facebook clone we can create new users ,sign in and out ,adding new posts ,comments and likes,we can also receive notifications from other users,adding images and modify personal details.So it is a fully active site which gives the experience of the real Fasebook site.this project was built using Next Js ,firebase with a fully controlled database",
    techStack: ["NEXT JS", "FIREBASE"],
    demo: "https://next-facebook-clone-ammar-1990.vercel.app/",
    code: "https://github.com/ammar-1990/next-facebook-clone",
  },
  {
    id: "11",
    name: "Real estate",
    img: "/images/real-estate-min.png",
    pull: true,
    overView:
      "Fully responsive MPA  real estate site which illustrates a lot of dynamic options using third party APIs.The data is shown as a modern beautiful cards ,using swiper to give the ability to choose and navigate freely,each card caontains the details and specifications of the real estate with the ability to navigate instantly to the details page.This project was built using Next js ,Swiper and form validation library",
    techStack: [
      "NEXT JS",
      "SWIPER",
      "THIRD PARTY API",
      "USE FORM VALIDATION",
      "CHAKRA UI",
    ],
    demo: "https://real-estate-ammar-1990.vercel.app/",
    code: "https://github.com/ammar-1990/Real-Estate",
  },
  {
    id: "12",
    name: "Dashboard - auth",
    img: "/images/dashboard-auth.png",
    pull: false,
    overView:
      "This admin dashboard was designed using react js and firebase ,so we have the ability to authenticate new created users and  to add ,edit and remove products or other normal users through a fully functional CRUD operations.This site illustrates many tabels and charts using material ui components ,and gives the the ability to switch between light and dark mode",
    techStack: ["REACT JS", "FIREBASE", "SASS", "MATERIAL UI"],
    demo: "https://ammar-1990.github.io/dashboard-auth/",
    code: "https://github.com/ammar-1990/dashboard-auth",
  },
  {
    id: "13",
    name: "Next-Dashboard",
    img: "/images/next-dash-board.png",
    pull: false,
    overView:
      "This dashboard is only larg screens friendly ,designed in a beautiful dark mode using Nextjs and many other libraries ,like echarts,material tables,and react full callendar,consists of 3 main pages with a lot of functionality",
    techStack: ["NEXT JS", "ECHARTS", "MATERIAL TABLES", "TAILWIND"],
    demo: "https://next-dashboard-nu.vercel.app/",
    code: "https://github.com/ammar-1990/next-dashboard",
  },
  {
    id: "14",
    name: "Amazon-clone",
    img: "/images/amazon.png",
    pull: true,
    overView:
      "A complete amazon clone with the ability to add products to cart and remove them, excute payments and observe our orders ,the site is fully responsive and was built with next js ,tailwind ,and redux toolkit",
    techStack: ["NEXT JS", "REDUX TOOLKIT", "LOCAL STORAGE", "TAILWIND"],
    demo: "https://amazon-next-clone-ebon.vercel.app/",
    code: "https://github.com/ammar-1990/amazon-next-clone",
  },
  {
    id: "15",
    name: "Airbnb Clone",
    img: "/images/airbnb.png",
    pull: true,
    overView:
      "Fully responsive airbnb clone built with next js using get server side and get static props with the ability to use date range in search input to specify our information ,with a progress bar when navigating between pages",
    techStack: ["NEXT JS", "TAILWIND"],
    demo: "https://next-airbnb-app.vercel.app/",
    code: "https://github.com/ammar-1990/next-airbnb-app",
  },
  {
    id: "16",
    name: "Instagram clone",
    img: "/images/insta.png",
    pull: true,
    overView:
      "Fully responsive Instagram clone built with Next js Firebase and tailwind with the ability to create new users, authentication, add posts , add comments and likes in addition to profile and post images with a fully checked signin and signout operation",
    techStack: ["NEXT JS", "FIREBASE", "TAILWIND"],
    demo: "https://next-insta-app.vercel.app/",
    code: "https://github.com/ammar-1990/next-insta-app",
  },
  {
    id: "17",
    name: "NextJS-13 News App",
    img: "/images/next13-app.png",
    pull: true,
    overView:
      "Fully responsive News App whith Nextjs 13 ,using 3rd party API to fetch real data ,By implementing ServerSide rendering , caching data ,and getStaticParams,the data is categoriezed and could be fetched dynamically using search input,we can switch between dark and ligh mode using next-theme.",
    techStack: ["NEXT JS -13", "NEXT-THEME", "TAILWIND", "3rd PARTY API "],
    demo: "https://next13-news-app-flame.vercel.app/",
    code: "https://github.com/ammar-1990/next13-news-app",
  },
  {
    id: "18",
    name: "NextJS Reddit Clone",
    img: "/images/reddit.png",
    pull: false,
    overView:
      "In this project, I have built a fully functional subreddit clone using Next.js, Supabase, and Tailwind. The clone allows users to create new posts, add comments to existing posts, and vote on posts. Additionally, it features a subreddit page where users can browse all posts related to a particular subreddit. I used Next.js to build a fast and efficient web application that delivers a seamless user experience. Leveraging the power of Supabase, I was able to store and manage data in a reliable and scalable way. And with the help of Tailwind, I created a visually appealing and responsive user interface that looks great on any device.",
    techStack: ["NEXT JS", "SUPABASE", "TAILWIND"],
    demo: "https://next-reddit-app.vercel.app/",
    code: "https://github.com/ammar-1990/next-reddit-app",
  },
  {
    id: "19",
    name: "NextJS Whats App  Clone",
    img: "/images/whatsapp.png",
    pull: false,
    overView:
      "This is a real-time messaging app built with Next-js and Firebase 9. Users can register new accounts, log in, and log out. Once logged in, they can create new chats by entering the email address of the user they want to chat with. The app uses Firebase Realtime Database to store chat messages and sync them in real time between users",
    techStack: ["NEXT JS", "FIREBASE", "TAILWIND", "MATERIAL UI"],
    demo: "https://next-whats-app-clone.vercel.app/",
    code: "https://github.com/ammar-1990/next-whatsApp-clone",
  },
  {
    id: "20",
    name: "MERN Fiverr Clone",
    img: "/images/fiverr.png",
    pull: true,
    overView:
      "Full-stack Fiverr clone using the MERN stack, featuring user registration and authentication with JWT and cookies, gig creation and order placement, and messaging between buyers and sellers. The application included gig filtering and search capabilities to help users find the services they need.The front-end of the application was built using React, and the back-end was implemented using Node.js and Express. MongoDB was used for data storage and retrieval. JSON Web Tokens (JWT) and cookies were used for user authentication and security. Throughout the project, I gained valuable experience in developing a full-stack web application and working with technologies such as React, Node.js, Express, MongoDB, and JWT. I also learned about the importance of user authentication and security in web applications, and how to implement these features using JWT and cookies.",
    techStack: [
      "MONGO DB",
      "REACT JS",
      "EXPRESS JS",
      "NODE JS",
      "TAILWIND",
      "JWT",
      "REACT QUERY",
    ],
    demo: "https://inspiring-cranachan-f783e0.netlify.app/",
    code: "https://github.com/ammar-1990/fiverr-frontend",
  },
  {
    id: "21",
    name: "MERN Chat-App",
    img: "/images/alpha.png",
    pull: false,
    overView:
      "Real-time chat application with WebSocket. The application allows users to register, log in, and send instant messages to other users in real-time. Using React for the frontend, Node.js and Express for the backend, and MongoDB for the database, I developed a responsive and user-friendly chat interface that enables easy communication between users. The WebSocket technology ensures that messages are delivered instantly and without delay. To ensure secure user authentication, I implemented a robust login and registration system using JSON Web Tokens (JWT) for user authorization. This feature ensures that only authenticated users can access the chat system.",
    techStack: [
      "MONGO DB",
      "REACT JS",
      "EXPRESS JS",
      "NODE JS",
      "TAILWIND",
      "JWT",
      "WEB-SOCKET",
    ],
    demo: "https://main--glistening-puppy-1f4fc0.netlify.app",
    code: "https://github.com/ammar-1990/MERN-app-chat",
  },
  {
    id: "22",
    name: "MERN Blog-App",
    img: "/images/mern-blog.png",
    pull: true,
    overView:
      " I have created a fully functional blog website that allows users to create, edit, and delete posts, filter them by categories, and perform login and logout operations. The website is built using the latest technologies, including React, Node.js, Express, and MongoDB. Here are some of the key features of the website. User authentication: Users can create accounts, log in, and log out of the website. Authentication is handled securely using JWT tokens.CRUD operations: Users can create, read, update, and delete their own posts. The website also has an admin panel that allows the administrator to manage all the posts on the website. Filtering by categories: Users can filter posts by categories, making it easy to find the posts they are interested in.Responsive design: The website is designed to look great on all devices, including desktops, tablets, and smartphones. Overall, this project showcases my skills as a MERN full-stack developer and demonstrates my ability to build complex web applications from the ground up.",
    techStack: [
      "MONGO DB",
      "REACT JS",
      "EXPRESS JS",
      "NODE JS",
      "TAILWIND",
      "JWT",
    ],
    demo: "https://ornate-baklava-4c1bf8.netlify.app/",
    code: "https://github.com/ammar-1990/mern-blog-app",
  },
  {
    id: "23",
    name: "NEXT js E_COMMERCE DASHBOARD",
    img: "/images/next-dashboard.png",
    pull: false,
    overView:
      "I developed a full-stack dashboard web application using Next.js, MongoDB, and Tailwind. The dashboard provides administrators with full control over the application's products, categories, and orders. Administrators can register, login, and manage the application's products by adding, editing, and deleting them. They can also manage the application's categories and view all orders placed by users.This project demonstrates my ability to develop complex back-end applications using modern tools and technologies. I utilized Next.js for server-side rendering, MongoDB for data storage, and Tailwind for styling. The dashboard's intuitive and user-friendly interface showcases my proficiency in creating applications that meet the unique needs of administrators.",
    techStack: ["MONGO DB", "NEXT JS", "TAILWIND JS", "JWT"],
    demo: "https://next-full-ecommerce.vercel.app/",
    code: "https://github.com/ammar-1990/next-full-ecommerce/tree/main/admin",
  },
  {
    id: "24",
    name: "NEXT js E_COMMERCE WEBSITE",
    img: "/images/next-ecommerce-front.png",
    pull: true,
    overView:
      "I developed a full-stack web application using Next.js, MongoDB, Redux, and Tailwind. The application allows users to browse the latest products, all products, and categories, as well as filter products by category, add and remove products from their cart, and place orders. The application's state is managed by Redux, providing a seamless and responsive user experience. This project demonstrates my ability to develop complex full-stack applications using modern tools and technologies. I utilized Next.js for server-side rendering, MongoDB for data storage, Redux for state management, and Tailwind for styling. The front-end's intuitive and user-friendly interface showcases my proficiency in creating applications that meet the unique needs of end-users.",
    techStack: ["MONGO DB", "NEXT JS", "TAILWIND JS", "JWT", "REDUX TOOLKIT"],
    demo: "https://next-full-ecommerce-fkss.vercel.app/",
    code: "https://github.com/ammar-1990/next-full-ecommerce/tree/main/front",
  },
  {
    id: "25",
    name: "NEXT js 13 FULLSTACK AIRBNB",
    img: "/images/airbnb-prisma.png",
    pull: true,
    overView:
      "Airbnb clone built with Next.js, Prisma, Next-auth, and MongoDB. This project is a culmination of my skills in full-stack web development, database management, and user authentication. With this Airbnb clone, users can register, login, and logout, add properties, make reservations, and view properties. The website is fast, responsive, and user-friendly, with a great interface that allows users to filter properties according to date range, price, guests counts, and rooms count.",
    techStack: [
      "MONGO DB",
      "NEXT JS",
      "TAILWIND JS",
      "PRISMA",
      "ZUSTAND",
      "DATE-RANGE",
    ],
    demo: "https://next13-fullstack-airbnb.vercel.app/",
    code: "https://github.com/ammar-1990/next13-fullstack-airbnb",
  },
  {
    id: "26",
    name: "TWITTER CLONE NEXT13 FULLSTACK",
    img: "/images/twitter.png",
    pull: false,
    overView:
      " full-stack Twitter clone using Next.js 13, NextAuth, and Prisma with MongoDB. The Twitter clone has a range of features that make it a fully functional social media platform, including user authentication and authorization, the ability to create new tweets, like and comment on tweets, and follow other users. The platform also includes notifications to keep users informed about various activities, providing a seamless and engaging user experience.",
    techStack: [
      "MONGO DB",
      "NEXT JS",
      "TAILWIND JS",
      "PRISMA",
      "ZUSTAND",
      "DATE-RANGE",
      "NEXT_AUTH",
    ],
    demo: "https://twit-clone-three.vercel.app/",
    code: "https://github.com/ammar-1990/next13-twitter-clone",
  },
];
