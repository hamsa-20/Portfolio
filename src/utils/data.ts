// Skills data with icon URLs and proficiency level percentages
export const skills = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 90
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 95
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 85
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    level: 80
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    level: 75
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    level: 70
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    level: 75
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 95
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 90
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    level: 85
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    level: 80
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    level: 85
  }
];

// Projects data
export const projects = [
  {
    id: 1,
    title: 'Connectify',
    description: 'Engineered a real-time messaging platform using the MERN stack and Socket.IO, enabling instant text and image sharing.',
    image: '/images/chat.jpeg', // ✅ Works only if placed in public/images/


    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/hamsa-20/Connectify',
    // live: 'https://ecommerce-platform.example.com'
  },
  {
    id: 2,
    title: 'StayFinder',
    description: ' StayFinder is a full-stack web application that allows users to browse, book, and list rental properties. It features user authentication, property search and filtering, image uploads, and responsive design for a smooth experience across all devices.',
    image: '/images/logo.jpg' // ✅ Works only if placed in public/images/
,
    category: 'ReactJs',
    technologies: ['React',  'Tailwind CSS'],
    github: 'https://github.com/hamsa-20/StayFinder',
    live: 'https://stayfinder1.onrender.com/'
  },
  {
    id: 3,
    title: 'Restaurant',
    description: 'A Restaurant website for food ordering ,dine and many more .',
    image: '/images/rest.jpeg'
,
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/hamsa-20/restaurant-website',
    // live: 'https://weather-dashboard.example.com'
  }
  
];