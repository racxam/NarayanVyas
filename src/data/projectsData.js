// projectsData.js

import projectImg1 from '../assets/img/project/project-1.png';
import projectImg2 from '../assets/img/project/project-2.png';
import projectImg3 from '../assets/img/project/project-1.png';
import projectImg4 from '../assets/img/project/project-2.png';
import FlutterIcon from '@mui/icons-material/FlutterDash'; // Replace with the actual Flutter icon
import FirebaseIcon from '@mui/icons-material/Whatshot'; // Example icon for Firebase
import JavaScriptIcon from '@mui/icons-material/Code'; // Example icon for JavaScript
import ReactIcon from '@mui/icons-material/EmojiObjects'; // Example icon for React
import NodeIcon from '@mui/icons-material/Storage'; // Example icon for Node.js

const projects = [
    {
        id: 1,
        images: [projectImg1, projectImg2, projectImg3],
        featuredImage: projectImg1,
        link: '/project-details',
        title: 'Kwizzle',
        techStack: [
            { icon: FlutterIcon, name: 'Flutter' },
            { icon: FirebaseIcon, name: 'Firebase' },
            { icon: JavaScriptIcon, name: 'JavaScript' }
        ],
        location: 'Remote',
        duration: '4 months',
        startDate: '2022-05-01',
        completionDate: '2022-09-01',
        client: 'Client A',
        featuredDescription: 'Kwizzle is a quiz app that uses API, Flutter, and Firebase for backend services.',
        descriptions: [
            'Developed a cross-platform quiz application.',
            'Implemented API integration for quiz questions.',
            'Utilized Firebase for real-time database and user authentication.',
            'Ensured smooth user experience with Flutter.'
        ],
        status: 'Completed',
        projectManager: 'John Doe',
        budget: '$40,000'
    },
    {
        id: 2,
        images: [projectImg2, projectImg3, projectImg4],
        featuredImage: projectImg2,
        link: '/project-details',
        title: 'TakeMyPark',
        techStack: [
            { icon: FlutterIcon, name: 'Flutter' },
            { icon: FirebaseIcon, name: 'Firebase' },
            { icon: FirebaseIcon, name: 'Firebase Messaging' }
        ],
        location: 'Remote',
        duration: '6 months',
        startDate: '2022-10-01',
        completionDate: '2023-04-01',
        client: 'Client B',
        featuredDescription: 'TakeMyPark is a parking space sharing app that utilizes Flutter, Firebase, and Firebase Messaging.',
        descriptions: [
            'Developed a mobile app for parking space sharing.',
            'Implemented real-time notifications with Firebase Messaging.',
            'Integrated Firebase for backend services and data storage.',
            'Ensured smooth and responsive UI with Flutter.'
        ],
        status: 'Completed',
        projectManager: 'Jane Smith',
        budget: '$60,000'
    },
    {
        id: 3,
        images: [projectImg3, projectImg4, projectImg1],
        featuredImage: projectImg3,
        link: '/project-details',
        title: 'Project Three',
        techStack: [
            { icon: FlutterIcon, name: 'Flutter' },
            { icon: FirebaseIcon, name: 'Firebase' },
            { icon: JavaScriptIcon, name: 'JavaScript' },
            { icon: ReactIcon, name: 'React' }
        ],
        location: 'Remote',
        duration: '5 months',
        startDate: '2023-01-01',
        completionDate: '2023-06-01',
        client: 'Client C',
        featuredDescription: 'A comprehensive mobile app development project using Flutter and Firebase.',
        descriptions: [
            'Developed a mobile application for both iOS and Android platforms.',
            'Integrated Firebase for backend services and real-time database.',
            'Implemented secure authentication and authorization mechanisms.',
            'Used Flutter to create a responsive and smooth user interface.'
        ],
        status: 'Completed',
        projectManager: 'Emily Johnson',
        budget: '$50,000'
    },
    {
        id: 4,
        images: [projectImg4, projectImg1, projectImg2],
        featuredImage: projectImg4,
        link: '/project-details',
        title: 'Project Four',
        techStack: [
            { icon: FlutterIcon, name: 'Flutter' },
            { icon: FirebaseIcon, name: 'Firebase' },
            { icon: JavaScriptIcon, name: 'JavaScript' },
            { icon: NodeIcon, name: 'Node.js' }
        ],
        location: 'Remote',
        duration: '7 months',
        startDate: '2023-03-01',
        completionDate: '2023-10-01',
        client: 'Client D',
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptions: [
            'Developed a SaaS platform for business management.',
            'Used React for frontend development and user interface design.',
            'Implemented scalable backend services with Node.js.',
            'Ensured data security and application performance optimization.'
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    },
    {
        id: 5,
        images: [projectImg4, projectImg1, projectImg2],
        featuredImage: projectImg4,
        link: '/project-details',
        title: 'Project Five',
        techStack: [
            { icon: FlutterIcon, name: 'Flutter' },
            { icon: FirebaseIcon, name: 'Firebase' },
            { icon: JavaScriptIcon, name: 'JavaScript' },
            { icon: NodeIcon, name: 'Node.js' }
        ],
        location: 'Remote',
        duration: '7 months',
        startDate: '2023-03-01',
        completionDate: '2023-10-01',
        client: 'Client D',
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptions: [
            'Developed a SaaS platform for business management.',
            'Used React for frontend development and user interface design.',
            'Implemented scalable backend services with Node.js.',
            'Ensured data security and application performance optimization.'
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    },
    {
        id: 6,
        images: [projectImg4, projectImg1, projectImg2],
        featuredImage: projectImg4,
        link: '/project-details',
        title: 'Project six',
        techStack: [
            { icon: FlutterIcon, name: 'Flutter' },
            { icon: FirebaseIcon, name: 'Firebase' },
            { icon: JavaScriptIcon, name: 'JavaScript' },
            { icon: NodeIcon, name: 'Node.js' }
        ],
        location: 'Remote',
        duration: '7 months',
        startDate: '2023-03-01',
        completionDate: '2023-10-01',
        client: 'Client D',
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptions: [
            'Developed a SaaS platform for business management.',
            'Used React for frontend development and user interface design.',
            'Implemented scalable backend services with Node.js.',
            'Ensured data security and application performance optimization.'
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    }
];

export default projects;
