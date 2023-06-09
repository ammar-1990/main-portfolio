
import mobile from '../public/mobile.json'
import react from '../public/react.json'
import backend from '../public/back-end.json'
import common from '../public/common.json'











export const services = [

    {
        id:1,
        title:'front-end',
        services:[
            "Develop responsive and user-friendly user interfaces using modern web technologies such as React, Tailwind CSS, and Bootstrap.",
            "Optimize web performance to ensure fast page load times and smooth user experiences.",
            "Implement accessibility best practices to ensure that web applications are usable by people with disabilities."
        ],
        lottie:react,
        images:[
            "/images/skills/React.png",
            "/images/skills/Next.png",
            "/images/skills/Tailwind.png",
            "/images/skills/Redux.png",
        ]
       
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
     
    ]
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
        ]
   
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
        lottie:common
    }
]