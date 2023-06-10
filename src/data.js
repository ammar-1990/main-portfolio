
import mobile from '../public/mobile.json'
import react from '../public/react.json'
import backend from '../public/back-end.json'
import common from '../public/common.json'











export const services = [

    {
        id:1,
        title:'front-end',
        services:[
            "Develop responsive and user-friendly user interfaces using modern web technologies such as React, Next, Tailwind CSS, and Bootstrap.",
            "Optimize web performance to ensure fast page load times and smooth user experiences.",
            "Implement accessibility best practices to ensure that web applications are usable by people with disabilities."
        ],
        lottie:react,
        images:[
            "/images/skills/React.png",
            "/images/skills/Next.png",
            "/images/skills/Tailwind.png",
            "/images/skills/Redux.png",
        ],
        small:true
       
    },
    {
        id:2,
        title:"back-end",
        services:[
            "Build scalable and secure RESTful APIs using Node.js, Express, and MongoDB.",
            "Implement authentication and authorization systems using industry-standard protocols such as OAuth2 and JWT.",
            "Develop serverless applications using AWS Lambda and API Gateway."
        ],
     lottie:backend,
     images:[
        "/images/skills/node.png",
        "/images/skills/express.png",
        "/images/skills/Next.png",
        "/images/skills/mongodb.png",
     
    ],

    small:false
    },

    {
        id:3,
        title:"mobile apps",
        services:[
            "Build cross-platform mobile applications using React Native and Expo.",
            "Implement native device features such as camera, geolocation, and push notifications.",
            "Optimize mobile performance to ensure fast startup times and smooth user experiences."

        ],
        lottie:mobile,
        images:[
            "/images/skills/native.png",
            "/images/skills/Tailwind.png",
        ],
        small:false,
   
    },

    {
        id:4,
        title:"Common Scenarios",
        services:[
            "Design and develop custom web and mobile applications for e-commerce, blog, portfolio, and small business scenarios.",
            "Implement responsive designs to ensure that applications look great on all devices.",
            "Develop custom features such as authentication, authorization, and payment processing to fit the specific needs of each scenario.",
            "Optimize applications for search engines and implement SEO strategies to increase visibility and reach.",
            "Integrate with third-party services such as social media platforms, Google Maps, and payment gateways to expand the functionality of applications.",
            "Develop progressive web applications (PWAs) and hybrid mobile applications using Next.js and React Native to ensure a seamless user experience across all devices.",
            "Provide ongoing maintenance and support to ensure that applications are secure and up-to-date."
        ],
        lottie:common,
        small:true
    }
]




export const skills = [
    {
        id:1,
        name:'html',
        level:'90%',
        img:'/images/skills/HTML.png'
    },
    {
        id:2,
        name:'css',
        level:'90%',
        img:'/images/skills/CSS.png'
    },
    {
        id:3,
        name:'java script',
        level:'80%',
        img:'/images/skills/JS.png'
    },
    {
        id:4,
        name:'react js',
        level:'90%',
        img:'/images/skills/React.png'
    },
    {
        id:5,
        name:'next js',
        level:'90%',
        img:'/images/skills/Next.png'
    },
    {
        id:6,
        name:'redux toolkit',
        level:'80%',
        img:'/images/skills/Redux.png'
    },
    {
        id:7,
        name:'bootstrap',
        level:'70%',
        img:'/images/skills/Bootstrap.png'
    },
    {
        id:8,
        name:'Tailwind',
        level:'90%',
        img:'/images/skills/Tailwind.png'
    },
    {
        id:9,
        name:'sass',
        level:'70%',
        img:'/images/skills/Sass.png'
    },
    {
        id:10,
        name:'chakra ui',
        level:'70%',
        img:'/images/skills/chakra-ui.png'
    },
    {
        id:11,
        name:'material ui',
        level:'70%',
        img:'/images/skills/material-ui.png'
    },
    {
        id:12,
        name:'node js',
        level:'75%',
        img:'/images/skills/node.png'
    },
    {
        id:13,
        name:'express js',
        level:'85%',
        img:'/images/skills/express.png'
    },
    {
        id:14,
        name:'wordporess',
        level:'75%',
        img:'/images/skills/wordpress.png'
    },
    {
        id:15,
        name:'mongodb',
        level:'80%',
        img:'/images/skills/mongodb.png'
    },
    {
        id:16,
        name:'postgreSQL',
        level:'75%',
        img:'/images/skills/postgresql.png'
    },
    {
        id:17,
        name:'firebase',
        level:'80%',
        img:'/images/skills/FireBase.png'
    },
    {
        id:18,
        name:'npm',
        level:'80%',
        img:'/images/skills/NPM.png'
    },
    {
        id:19,
        name:'git hub',
        level:'70%',
        img:'/images/skills/Git hub.png'
    },
    {
        id:20,
        name:'react native',
        level:'75%',
        img:'/images/skills/native.png'
    },
    
]



export const certificates = [
    {
      id: "c1",
      name: "google project management",
      icon: "/Images/google.png",
      img: "/Images/min.JPG",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/AY8F2BJLHAB5",
    },
    {
      id: "c2",
      name: "meta frontend developer",
      icon: "/Images/Meta.png",
      img: "/Images/min2.JPG",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/A3MKYTPLGJ28",
    },
    {
      id: "c3",
      name: "meta react native",
      icon: "/Images/Meta.png",
      img: "/Images/min3.JPG",
      link: "https://www.coursera.org/account/accomplishments/specialization/G8XCADNXZDGR",
    },
  ];