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
        id: '1',
        images: [projectImg1, projectImg2, projectImg3],
        featuredImage: projectImg1,
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
        researchOutcomeDois: [],
        featuredDescription: 'Kwizzle is a quiz app that uses API, Flutter, and Firebase for backend services.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Completed',
        projectManager: 'John Doe',
        budget: '$40,000'
    },
    {
        id: '2',
        images: [projectImg2, projectImg3, projectImg4],
        featuredImage: projectImg2,
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
        researchOutcomeDois: [],
        featuredDescription: 'TakeMyPark is a parking space sharing app that utilizes Flutter, Firebase, and Firebase Messaging.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Completed',
        projectManager: 'Jane Smith',
        budget: '$60,000'
    },
    {
        id: '3',
        images: [projectImg3, projectImg4, projectImg1],
        featuredImage: projectImg3,

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
        researchOutcomeDois: [],
        featuredDescription: 'A comprehensive mobile app development project using Flutter and Firebase.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Completed',
        projectManager: 'Emily Johnson',
        budget: '$50,000'
    },
    {
        id: '4',
        images: [projectImg4, projectImg1, projectImg2],
        featuredImage: projectImg4,
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
        researchOutcomeDois: [],
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    },
    {
        id: '5',
        images: [projectImg4, projectImg1, projectImg2],
        featuredImage: projectImg4,
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
        researchOutcomeDois: [],
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    },
    {
        id: '6',
        images: [projectImg4, projectImg1, projectImg2],
        featuredImage: projectImg4,
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
        researchOutcomeDois: [],
        featuredDescription: 'An extensive project to build a SaaS application using modern web technologies.',
        descriptionParagraphs: [
            {
                title: "",
                content: "As an expert in Internet of Things (IoT) solutions, I offer comprehensive services to help you leverage the power of connected devices. With extensive experience in Arduino, Raspberry Pi, ESP32, STM32, various microcontrollers, sensors, LoRa, WiFi, and Bluetooth, I provide custom IoT solutions tailored to your specific needs. My commitment to excellence ensures that your IoT projects are successfully designed, developed, and deployed."
            },
            {
                title: "Why IoT Solutions Matter?",
                content: "The Internet of Things (IoT) is transforming industries by enabling smart and efficient systems. IoT solutions can significantly enhance operations, improve efficiency, and provide valuable insights through data collection and analysis. Whether you're looking to implement smart home systems, industrial automation, or environmental monitoring, my IoT solutions are designed to meet your objectives and drive innovation."
            }
        ],
        status: 'Ongoing',
        projectManager: 'David Taylor',
        budget: '$150,000'
    }
];

export default projects;
